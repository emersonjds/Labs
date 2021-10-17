import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import ButtonDefault from '../../components/ButtonDefault';
import ContainerSkill from '../../components/ContainerSkill';
import Colors from '../../Contants';
import {
  Container,
  InputDefault,
  Title,
  ButtonSkill,
  TextSkill,
} from './styles';

const Home = () => {
  const [mySkill, setMySkill] = useState('');
  const [skylls, setSkylls] = useState([]);

  const handleAddSkill = () => {
    console.log('clicado');
    setSkylls([...skylls, mySkill]);
    setMySkill('');
  };

  return (
    <Container>
      <Title>Your Skills</Title>
      <InputDefault
        placeholder="What do you know?"
        onChangeText={setMySkill}
        value={mySkill}
      />

      <ButtonDefault title="Add" onPress={() => handleAddSkill()} />

      <Title mt={20}>Your Skills</Title>

      {skylls.map((skill, index) => {
        return <ContainerSkill skill={skill} index={index} />;
      })}
    </Container>
  );
};

export default Home;
