import React, { useState, useEffect, useCallback, useRef } from 'react';

import {
  ButtonAdd,
  Container,
  InputText,
  TextButton,
  Title,
  TextSkill,
} from './styles';

export const Home = () => {
  const [mySkills, setMySkills] = useState('');
  const [skills, setSkills] = useState([]);
  const inputSkill = useRef();

  const handleAddSkill = useCallback(() => {
    setSkills([...skills, mySkills]);
    setMySkills('');
  });

  return (
    <Container>
      <Title>Welcome, Emerson</Title>
      <InputText
        placeholder="your skill"
        placeholderTextColor="#cecece"
        onChangeText={text => setMySkills(text)}
        ref={inputSkill}
        value={mySkills}
      />
      <Title style={{ marginTop: 20 }}>Welcome, Emerson</Title>
      <ButtonAdd onPress={handleAddSkill}>
        <TextButton>Add</TextButton>
      </ButtonAdd>

      <Title style={{ marginTop: 20 }}>My Skills</Title>

      {skills && skills.map(data => <TextSkill key={data}>{data}</TextSkill>)}
    </Container>
  );
};
