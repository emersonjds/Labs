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
    wrapper.getByText('Nov 06, 2021');
  });

  test('should contain current day', () => {
    const wrapper = render(<Home />);
    wrapper.getByText('Saturday');
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

// describe('tests on container', () => {
//   beforeEach(() => {
//     jest.useFakeTimers('modern')
//     jest.setSystemTime(946684800000) // Saturday, 01 January 2000 00:00:00 GMT
//   });

//   afterEach(() => {
//     jest.useRealTimers()
//   })

//   test('should contain current date', () => {
//     const wrapper = render(<Home />);
//     wrapper.getByText('Jan 01, 2000')
//   });

//   test('should contain current day', () => {
//     const wrapper = render(<Home />);
//     wrapper.getByText('Saturday');
//   });
// })
