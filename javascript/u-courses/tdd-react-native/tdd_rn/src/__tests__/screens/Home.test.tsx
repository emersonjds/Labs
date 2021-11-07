import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../../screens/Home';
import moment from 'moment';

describe('Home', () => {

  describe('tests on container', () => {
    beforeEach(() => {
      jest.useFakeTimers('modern')
      jest.setSystemTime(946684800000) // Saturday, 01 January 2000 00:00:00 GMT
    });

    afterEach(() => {
      jest.useRealTimers()
    })

    test('should contain current date', () => {
      const wrapper = render(<Home />);
      wrapper.getByText('Jan 01, 2000')
    });

    test('should contain current day', () => {
      const wrapper = render(<Home />);
      wrapper.getByText('Saturday');
    });

  })


  test('renders correctly', () => {
    const wrapper = render(<Home />);
    wrapper.getByTestId('home-screen');
  });

  test('should contain current date', () => {
    const wrapper = render(<Home />);
    wrapper.getByText('Nov 06, 2021')
  });

  test('should contain current day', () => {
    const wrapper = render(<Home />);
    wrapper.getByText('Saturday');
  });


});

