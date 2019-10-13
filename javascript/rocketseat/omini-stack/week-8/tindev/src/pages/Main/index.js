import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import io from 'socket.io-client';
Icon.loadFont();

import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import logo from '../../assets/img/log.png';
import {Logo} from './styles';
import api from '../../services/api';

export default function Main({navigation}) {
  const id = navigation.getParam('user'); // id login on application
  console.log(id);
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: id,
        },
      });
      setUsers(response.data);
    }
    loadUsers();
  }, [id]);

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      // when to do a connection with socket the query params are sent to server
      query: {user: id},
    });
    socket.on('match', dev => {
      setMatchDev(dev);
    });
  }, [id]);

  async function handleLike() {
    const [user, ...rest] = users;
    await api.post(`devs/${user._id}/likes`, null, {
      headers: {user: id},
    });
    setUsers(rest);
  }
  async function handleDesLike() {
    const [user, ...rest] = users;
    await api.post(`devs/${user._id}/deslikes`, null, {
      headers: {user: id},
    });
    setUsers(rest);
  }

  async function handleLogout() {
    AsyncStorage.clear();
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Logo source={logo} />
      </TouchableOpacity>

      <View style={styles.cardsContainer}>
        {users.length === 0 ? (
          <Text style={styles.message}>Voce nao possui mais matchs :( </Text>
        ) : (
          users.map((user, index) => (
            <View
              key={user._id}
              style={[styles.card, {zIndex: users.length - index}]}>
              <Image
                style={styles.avatar}
                source={{
                  uri: user.avatar,
                }}
              />
              <View style={styles.footer}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.bio}>{user.bio}</Text>
              </View>
            </View>
          ))
        )}
      </View>
      {users.length > 0 && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleDesLike}>
            <Text>
              <Icon name="close" size={35} color="red" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLike}>
            <Text>
              <Icon name="hearto" size={35} color="#7FDB6A" />
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {matchDev && (
        <View style={styles.matchContainer}>
          <Image style={styles.matchAvatar} source={{uri: matchDev.avatar}} />
          <Text style={styles.matchName}>{matchDev.name}</Text>
          <Text style={styles.matchBio}>{matchDev.bio}</Text>
          <TouchableOpacity
            style={styles.closeMatch}
            onPress={() => setMatchDev(null)}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 500,
  },
  card: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  avatar: {
    flex: 1,
    height: 300,
  },
  footer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  empty: {
    alignSelf: 'center',
    color: '#999',
    fontWeight: 'bold',
  },
  matchContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchAvatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: '#FFF',
    marginVertical: 30,
  },
  matchName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
  },
  matchBio: {
    marginTop: 10,
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  closeMatch: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
  },
});
