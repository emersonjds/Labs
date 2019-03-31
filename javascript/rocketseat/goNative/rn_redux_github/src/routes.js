import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from "./pages/Login";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login
  })
);

export default Routes;
