import React from 'react';

import { render } from '@testing-library/react-native';

import Home from '../screens/Home';

describe('Home', () => {
  test('render correctly', () => {
    const wrapper = render(<Home />);
    wrapper.getByTestId('home');
  });

  describe('Title Section', () => {
    beforeEach(() => {
      jest.useFakeTimers('modern');
      jest.setSystemTime(946684800000); // Simulate Jan 1 2000
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test('should contain current time', () => {
      const wrapper = render(<Home />);
      wrapper.getByTestId('Jan 01, 2000');
    });
  });
});
