import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title:
      navigation.getParam('user').name || navigation.getParam('user').login,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    loading: false,
    page: 1,
    refreshing: false,
  };

  async componentDidMount() {
    await this.loadFirstPage();
  }

  loadFirstPage = async () => {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    this.setState({ loading: true });
    const response = await api.get(`/users/${user.login}/starred`);
    this.setState({ stars: response.data, loading: false });
  };

  loadMore = async () => {
    const { navigation } = this.props;
    const { page, stars } = this.state;
    const nextPage = page + 1;

    const user = navigation.getParam('user');
    const response = await api.get(
      `/users/${user.login}/starred?page=${nextPage}`
    );
    console.tron.log(response.data.length);
    if (response.data && response.data.length > 0) {
      this.setState({
        stars: [...stars, ...response.data],
        page: nextPage,
      });
    }
  };

  refreshList = async () => {
    await this.loadFirstPage();
  };

  handleNavigate = starred => {
    const { navigation } = this.props;

    navigation.navigate('Favorite', { starred });
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading } = this.state;
    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        {loading ? (
          <ActivityIndicator color="#7159c1" />
        ) : (
          <Stars
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            onRefresh={this.refreshList}
            refreshing={this.state.refreshing}
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred onPress={() => this.handleNavigate(item)}>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
