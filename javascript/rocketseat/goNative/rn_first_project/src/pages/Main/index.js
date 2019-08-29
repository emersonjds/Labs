import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';
import api from '../../services/api';

Icon.loadFont();

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: '',
      users: [],
    };
  }

  handleAddUser = async () => {
    const { users, newUser } = this.state;
    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, data],
      newUser: '',
    });

    Keyboard.dismiss();
  };

  render() {
    const { users, newUser } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            value={newUser}
            onChangeText={text =>
              this.setState({
                newUser: text,
              })
            }
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="add" size={20} color="#eee" />
          </SubmitButton>
        </Form>
        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.login}</Name>
              <Bio>{item.bio}</Bio>
              <ProfileButton>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}
