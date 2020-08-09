import React, {useState, useEffect} from 'react';

import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  TextInput,
} from 'react-native';

import api from './services/api';
import axios from 'axios';

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
        <Text style={styles.text}>API Data {'\n'}</Text>

        <FlatList
          styles={{alignItems: 'center', justify: 'center'}}
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.text}>{project.name}</Text>
          )}
        />
        <Text>Include a new project</Text>
        <TextInput autoCorrect={false} autofocus={true} autoCapitalize="none" />
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
