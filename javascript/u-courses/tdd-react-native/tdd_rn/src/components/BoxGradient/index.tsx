import React from 'react';
import { ContainerGradient } from './styles';

interface BoxGradientProps {
  colorOne: string;
  colorTwo: string;
}

const BoxGradient: React.FC<BoxGradientProps> = ({ colorOne, colorTwo }) => {
  return <ContainerGradient ccolorOne1={colorOne} colorTwo={colorTwo} />;
};

export default BoxGradient;
