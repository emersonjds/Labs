import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../../screens/Home';

describe('Home', () => {
  it('renders correctly', () => {
    render(<Home />);
  });
});
