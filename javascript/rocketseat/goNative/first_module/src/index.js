import React, {useState, useEffect} from 'react';

import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        {projects.map((data) => (
          <Text key={data.id}>{data.title}</Text>
        ))}
      </SafeAreaView>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFF',
  },
});
