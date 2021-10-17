import React from 'react';
import Colors from '../../Contants';
import { ButtonSkill, TextSkill } from './styles';

const ContainerSkill = ({ skill, index }) => {
  return (
    <ButtonSkill key={index}>
      <TextSkill style={{ color: Colors.white }}>{skill}</TextSkill>
    </ButtonSkill>
  );
};

export default ContainerSkill;
