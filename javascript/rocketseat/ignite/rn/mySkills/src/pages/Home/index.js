import React, { useState, useCallback } from 'react';

import {
  ButtonAdd,
  Container,
  InputText,
  TextButton,
  Title,
  TextSkill,
} from './styles';

import { ButtonComponent } from '../../components/Button';

export const Home = () => {
  const [mySkills, setMySkills] = useState('');
  const [skills, setSkills] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        value={mySkills}
      />
      <Title style={{ marginTop: 20 }}>My Skills</Title>
      <ButtonComponent onPress={handleAddSkill} />
      {skills && skills.map(data => <TextSkill key={data}>{data}</TextSkill>)}
    </Container>
  );
};
