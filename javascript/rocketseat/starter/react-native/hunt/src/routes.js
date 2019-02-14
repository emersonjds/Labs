import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./pages/main";
import Product from "./pages/product";

const AppNavigator = createStackNavigator({
  Main,
  Product
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
