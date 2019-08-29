import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import api from '../../services/api';
import {
  Container,
  Avatar,
  Bio,
  Name,
  Header,
  List,
  ContainerRepo,
  AvatarRepo,
  OwnerRepo,
  RepoDescription,
  Info,
} from './styles';

export class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  // eslint-disable-next-line react/no-typos
  static PropTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      starredRepos: [],
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    const response = await api.get(`/users/${user.login}/starred`);
    this.setState({
      starredRepos: response.data,
    });
  }

  render() {
    const { starredRepos } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.login}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        <List
          data={starredRepos}
          keyExtractor={repo => String(repo.id)}
          renderItem={({ item }) => (
            <ContainerRepo>
              <AvatarRepo source={{ uri: item.owner.avatar_url }} />
              {/* <Text>{item.name}</Text> */}
              <Info>
                <OwnerRepo>{item.name}</OwnerRepo>
                <RepoDescription>{item.owner.login}</RepoDescription>
                {/* <Text>{item.name}</Text> */}
              </Info>
            </ContainerRepo>
          )}
        />
      </Container>
    );
  }
}

export default User;
