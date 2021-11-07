import { render } from '@testing-library/react-native';
import React from 'react';
import WeatherCurrent from '../../components/WeatherCurrent';

describe('WeatherCoordinates', () => {
  test('renders correctly', () => {
    const wrapper = render(<WeatherCurrent />);
    wrapper.getByTestId('WeatherCurrent');
  });
  test('should navigate to another screen', () => { });
});
