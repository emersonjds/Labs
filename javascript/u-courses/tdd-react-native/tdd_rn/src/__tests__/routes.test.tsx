import { render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import AppNavigator from '../routes';

import Home from '../screens/Home';

jest.mock('../screens/Home', () => jest.fn());

describe('AppNavigator', () => {
  test('Should render Home by default', async () => {
    (Home as jest.Mock).mockReturnValueOnce(<View testID="home" />);
    const wrapper = render(<AppNavigator />);

    await waitFor(() => {
      wrapper.getByTestId('home');
    });
  });
});
