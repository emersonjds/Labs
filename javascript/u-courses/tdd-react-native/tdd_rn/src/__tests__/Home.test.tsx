import React from 'react';

import { render } from '@testing-library/react-native';
import {View} from 'react-native';

import Home from '../screens/Home';

import WeatherCurrent from '../components/WeatherCurrent';
import WeatherCordinates from '../components/WeatherCordinates';

jest.mock('../components/WeatherCordinates', () => jest.fn().mockReturnValue(null));
jest.mock('../components/WeatherCurrent', () => jest.fn().mockReturnValue(null));

describe('Home Screen', () => {
  test('should render corretly', () => {
    const wrapper = render(<Home />);
    wrapper.getByTestId('home-screen');
  });

  describe('title section', () => {
    test('should contain current date', () => {
      const wrapper = render(<Home />);
      wrapper.getByText('Aug 25, 2021');
    });

    test('should contain current day', () => {
      const wrapper = render(<Home />);
      wrapper.getByText('Wed');
    });

    test('should verify fi exists a section of WeatherCurrent', () => {
      (WeatherCurrent as jest.Mock).mockReturnValue(
        <View testID="mock-weather-current" />
      );
      const wrapper = render(<Home />);
      expect(wrapper.getByTestId('mock-weather-current'));
    })

    test('should verify fi exists a section of WeatherCordinates', () => {
      (WeatherCordinates as jest.Mock).mockReturnValue(
        <View testID="mock-weather-cordinates" />
      );
      const wrapper = render(<Home />);
      expect(wrapper.getByTestId('mock-weather-cordinates'));
    })
  });
});
