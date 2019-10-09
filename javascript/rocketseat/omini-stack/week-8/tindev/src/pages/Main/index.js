import React, {useEffect, useState} from 'react';
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

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo source={logo} />

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://avatars2.githubusercontent.com/u/12503997?v=4',
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.name}>Emerson</Text>
            <Text style={styles.bio}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              fugit repellendus, esse rem explicabo voluptatem soluta quo
              aliquam et assumenda minima saepe id facere aperiam eligendi totam
              optio, quam laborum!
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Deslike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Like</Text>
        </TouchableOpacity>
      </View>
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
    elevation: 2,
    shadowColor: '#000',
    opacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
