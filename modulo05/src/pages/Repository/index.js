import React, { Component } from 'react';

import api from '../../services/api';

// import { Container } from './styles';

export default class Repository extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repository: {},
      issues: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      loading: false,
      repository: repository.data,
      issues: issues.data,
    });

    console.log(this.state);
  }

  render() {
    const { loading, repository, issues } = this.state;
    return (
      <>
        <h1>Repository: {repository.full_name}</h1>
        <p>Owner: {repository.owner ? repository.owner.login : ''}</p>
        <p>Open issues: {repository.open_issues}</p>
        <ul>
          {issues.map(issue => (
            <li key={issue.id}>
              {issue.state}: {issue.number} - {issue.title}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
