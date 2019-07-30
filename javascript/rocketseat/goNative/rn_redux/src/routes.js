import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Home from './pages/Home';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Home,
  }),
);

export default Routes;
