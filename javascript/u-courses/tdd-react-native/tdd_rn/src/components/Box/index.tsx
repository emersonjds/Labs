import React from 'react';

import { Container } from './styles';

import { ViewProps } from 'react-native';

const Box: React.FC<ViewProps> = ({ testID }) => {
  return <Container testID={testID} />;
};

export default Box;
