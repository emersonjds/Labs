import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Colors from '../../Contants';
import {
  ButtonAdd,
  Container,
  InputDefault,
  Title,
  TextButtonAdd,
  ButtonSkill,
  TextSkill,
} from './styles';

const Home = () => {
  const [mySkill, setMySkill] = useState('');
  const [skylls, setSkylls] = useState([]);

  const handleAddSkill = () => {
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

      <ButtonAdd onPress={handleAddSkill}>
        <TextButtonAdd>Add</TextButtonAdd>
      </ButtonAdd>

      <Title mt={20}>Your Skills</Title>

      {skylls.map((skill, index) => {
        return (
          <ButtonSkill key={index}>
            <TextSkill style={{ color: Colors.white }}>{skill}</TextSkill>
          </ButtonSkill>
        );
      })}
    </Container>
  );
};

export default Home;
