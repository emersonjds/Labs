import React from 'react';
import { ButtonAdd, Container, InputDefault, Title, TextButtonAdd } from './styles';

const Home = () => {
  return (
    <Container>
      <Title>Your Skills</Title>
      <InputDefault placeholder="What do you know?" />

      <Title style={{ marginTop: 20 }}>Your Skills</Title>

      <ButtonAdd>
        <TextButtonAdd>Add</TextButtonAdd>
      </ButtonAdd>
    </Container>
  );
};

export default Home;
