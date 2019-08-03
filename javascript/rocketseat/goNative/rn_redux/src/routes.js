import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Repositories from './pages/Repositories';

const RepositoriesTab = createStackNavigator({
  Repositories,
});

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    RepositoriesTab,
  }),
);

export default Routes;
