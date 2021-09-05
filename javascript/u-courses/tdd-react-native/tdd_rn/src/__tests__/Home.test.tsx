import React from 'react';

import { render } from '@testing-library/react-native';

import Home from '../screens/Home';

describe('Home Screen', () => {
  test('should render corretly', () => {
    const wrapper = render(<Home />);
    wrapper.getByTestId('home-screen');
  });

  describe('title section', () => {
    test('should contain current date', () => {
      const wrapper = render(<Home />);
      wrapper.getByText('Set 04, 2021');
    });

    test('should contain current day', () => {
      const wrapper = render(<Home />);
      wrapper.getByText('Sat');
    });
  });
});
