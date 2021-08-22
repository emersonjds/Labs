import React from 'react';

import { render } from '@testing-library/react-native';

import Home from '../screens/Home';

describe('Home Screen', () => {
  test('should render corretly', () => {
    const wrapper = render(<Home />);
    wrapper.getByTestId('home-screen');
  });

  describe('title section', () => {
    beforeEach(() => {
      jest.useFakeTimers('modern');
      jest.setSystemTime(946684800000); // Saturday , 01 Jan , 2000 00:00 UTC
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test('should contain current date', () => {
      const wrapper = render(<Home />);
      wrapper.getByText('Aug 22, 2021');
    });

    test('should contain current day', () => {
      const wrapper = render(<Home />);
      wrapper.getByText('Sunday');
    });
  });
});
