import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('Test App', () => {
  it('should render corretly', () => {
    const wrapper = render(<App />);
    wrapper.getByTestId('App');
  });
});

export {};
