import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import Login from "./pages/Login";
import Repositories from "./pages/Repositories";

export const RepositoriesArea = createStackNavigator({
  Repositories
});

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    RepositoriesArea
  })
);

export default Routes;
