import React, { useState } from 'react';
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
    setMySkill('');
  };

  return (
    <Container>
      <Title>Your Skills</Title>
      <InputDefault placeholder="What do you know?" onChangeText={setMySkill} />
      <Title mt={20}>Your Skills</Title>

      <ButtonAdd onPress={handleAddSkill}>
        <TextButtonAdd>Add</TextButtonAdd>
      </ButtonAdd>
    </Container>
  );
};

export default Home;
