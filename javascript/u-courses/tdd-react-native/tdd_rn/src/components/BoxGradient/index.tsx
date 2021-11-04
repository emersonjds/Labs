import React from 'react';
import { ContainerGradient } from './styles';

interface Props {
  c1: string;
  c2: string;
}

const BoxGradient: React.FC<Props> = ({ c1, c2 }) => {
  return <ContainerGradient c1={c1} c2={c2} />;
}

export default BoxGradient;