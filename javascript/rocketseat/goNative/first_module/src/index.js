import React, {useState, useEffect} from 'react';

import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import api from './services/api';
import axios from 'axios';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjets();
  }, []);

  function getProjets() {
    axios.get('http://169.254.155.96:3333/projects').then((response) => {
      setProjects(response.data);
    });
  }

  async function handleAddProject() {
    const response = await axios.post('http://169.254.155.96:3333/projects', {
      name: 'Projeto com React Native',
      owner: 'Emerson Silva',
    });
    const project = response.data.data;
    setProjects([...projects, project]);
  }

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
        <TouchableOpacity style={styles.button} onPress={handleAddProject}>
          <Text style={styles.textButton}>Adicionar Novo Projeto</Text>
        </TouchableOpacity>
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
  button: {
    height: 52,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginBottom: 20,
    width: '80%',
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
