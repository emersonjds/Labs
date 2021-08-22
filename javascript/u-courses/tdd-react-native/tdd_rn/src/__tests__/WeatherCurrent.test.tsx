import { render } from '@testing-library/react-native';
import React from 'react';
import WeatherCurrent from '../components/WeatherCurrent';

describe('Weaher current', () => {
  test('should render corretly', () => {
    const wrapper = render(<WeatherCurrent />);
    wrapper.getByTestId('weather-current');
  });
});
