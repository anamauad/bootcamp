import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import api from '../../services/api';

import {
  Loading,
  Owner,
  IssuesList,
  IssuesFilter,
  FilterButton,
  PageNav,
  SubmitButton,
} from './styles';
import Container from '../../components/Container';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    await this.showOpenedIssues();
  }

  showOpenedIssues = async () => {
    await this.loadIssues('open');
  };

  showClosedIssues = async () => {
    await this.loadIssues('closed');
  };

  showAllIssues = async () => {
    await this.loadIssues('all');
  };

  nextPage = async () => {
    const { issuesState, page } = this.state;
    await this.loadIssues(issuesState, page + 1);
  };

  previousPage = async () => {
    const { issuesState, page } = this.state;
    await this.loadIssues(issuesState, page - 1);
  };

  async loadIssues(state, page = 1) {
    this.setState({ loading: true });
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state,
          per_page: 30,
          page,
        },
      }),
    ]);

    this.setState({
      loading: false,
      repository: repository.data,
      issues: issues.data,
      issuesState: state,
      page,
    });
    console.log(this.state);
  }

  render() {
    const { loading, repository, issues, issuesState, page } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssuesList>
          <IssuesFilter>
            <FilterButton
              onClick={this.showOpenedIssues}
              selected={issuesState === 'open'}
            >
              Em aberto
            </FilterButton>
            <FilterButton
              onClick={this.showClosedIssues}
              selected={issuesState === 'closed'}
            >
              Fechadas
            </FilterButton>
            <FilterButton
              onClick={this.showAllIssues}
              selected={issuesState === 'all'}
            >
              Todas
            </FilterButton>
          </IssuesFilter>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url} target="blank">
                    {issue.title}
                  </a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssuesList>
        <PageNav>
          <SubmitButton
            onClick={this.previousPage}
            title="Página anterior"
            disabled={page < 2}
          >
            <FaChevronCircleLeft />
          </SubmitButton>
          <span>Página {page}</span>
          <SubmitButton
            onClick={this.nextPage}
            title="Próxima página"
            disabled={issues.length < 30}
          >
            <FaChevronCircleRight />
          </SubmitButton>
        </PageNav>
      </Container>
    );
  }
}
