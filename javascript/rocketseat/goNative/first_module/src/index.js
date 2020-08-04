import React, {useState, useEffect} from 'react';

import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';

import api from './services/api';
import axios from 'axios';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.15.51:3333/projects').then((response) => {
      console.log('dados', response.data);
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>API Data {'\n'}</Text>

        {projects.map((data) => (
          <Text key={data.id} style={styles.text}>
            {data.name} {data.owner}
            {'\n'}
          </Text>
        ))}
        {/* {projects.map((data) => (
          <Text key={data.id} style={styles.text}>
            {data.title}
          </Text>
        ))} */}
      </SafeAreaView>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFF',
  },
});
