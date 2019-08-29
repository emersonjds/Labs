import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center', // centralizar texto em ambas as plataformas
      headerBackTitleVisible: false, // back title is hidden
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#e9005c',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
