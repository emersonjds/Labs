import React from 'react';

import { ButtonAdd, TextButton } from './styles';

const ButtonDefault = ({ title, ...rest }) => {
  return (
    <ButtonAdd {...rest}>
      <TextButton>{title}</TextButton>
    </ButtonAdd>
  );
};

export default ButtonDefault;
