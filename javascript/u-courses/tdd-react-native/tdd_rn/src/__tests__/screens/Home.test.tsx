import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../../screens/Home';
import { View } from 'react-native';
import WeatherCurrent from '../../components/WeatherCurrent';

jest.mock('../../components/WeatherCurrent', () =>
  jest.fn().mockReturnValue(null),
);
jest.mock('../../components/WeatherCoordinates', () =>
  jest.fn().mockReturnValue(null),
);

describe('Home', () => {
  // real tests
  test('renders correctly', () => {
    const wrapper = render(<Home />);
    wrapper.getByTestId('home-screen');
  });

  test('should contain current date', () => {
    const wrapper = render(<Home />);
    wrapper.getByText('Nov 07, 2021');
  });

  test('should contain current day', () => {
    const wrapper = render(<Home />);
    wrapper.getByText('Sunday');
  });

  test('should contain a section to get current weather', () => {
    (WeatherCurrent as jest.Mock).mockReturnValue(
      <View testID="weatherCurrentMock" />,
    );
    const wrapper = render(<Home />);
    wrapper.getByTestId('weatherCurrentMock');
    expect(WeatherCurrent).toHaveBeenCalled();
  });
});
