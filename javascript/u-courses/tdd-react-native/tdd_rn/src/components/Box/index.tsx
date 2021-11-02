import React from 'react';

import { Container } from './styles';

interface BoxProps {
  testID?: string;
}

const Box: React.FC<BoxProps> = ({ testID }) => {
  return <Container testID={testID} />;
};

export default Box;
