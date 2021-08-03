import React from 'react';

import { render } from '@testing-library/react-native'

import App from '../App';
import Home from '../screens/Home';

describe('App', () => {
  test('should render correctly', () => {
    const wrapper = render(<App />)
    wrapper.getByTestId('app')
  })
})

describe('Home', () => {
  test('render correctly', () => {
    const wrapper = render(<Home />)
    wrapper.getByTestId('home')
  })
})



