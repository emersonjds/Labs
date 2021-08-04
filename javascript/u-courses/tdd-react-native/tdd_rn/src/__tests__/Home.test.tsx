import React from 'react';

import { render } from '@testing-library/react-native'

import Home from '../screens/Home';

describe('Home', () => {
  test('render correctly', () => {
    const wrapper = render(<Home />)
    wrapper.getByTestId('home')
  })

  test('render correctly with props', () => {
    const wrapper = render(<Home />)
    wrapper.getByTestId('home')
  })
})

