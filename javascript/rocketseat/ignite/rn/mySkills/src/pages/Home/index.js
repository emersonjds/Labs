import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Colors from '../../Contants';
import {
  ButtonAdd,
  Container,
  InputDefault,
  Title,
  TextButtonAdd,
} from './styles';

const Home = () => {
  const [mySkill, setMySkill] = useState('');
  const [skylls, setSkylls] = useState([]);

  const handleAddSkill = () => {
    setSkylls([...skylls, mySkill]);
    setTimeout(() => {
      setMySkill('');
    }, 1000);
  };

  return (
    <Container>
      <Title>Your Skills</Title>
      <InputDefault placeholder="What do you know?" onChangeText={setMySkill} />
      <Title mt={20}>Your Skills</Title>

      {skylls.map(skill => {
        return <Text style={{ color: Colors.white }}> * {skill}</Text>;
      })}

      <ButtonAdd onPress={handleAddSkill}>
        <TextButtonAdd>Add</TextButtonAdd>
      </ButtonAdd>
    </Container>
  );
};

export default Home;
