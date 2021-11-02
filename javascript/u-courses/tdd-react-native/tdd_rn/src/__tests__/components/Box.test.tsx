import React from 'react';
import { render } from '@testing-library/react-native';
import Box from '../../components/Box';

describe('Box', () => {
  it('should be return a box corretly', () => {
    render(<Box />);
  });
});
