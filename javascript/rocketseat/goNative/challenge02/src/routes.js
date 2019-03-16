import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { Repositories } from "./pages/Repositories";
import { Issues } from "./pages/Issues/index";

const Routes = createAppContainer(
  createSwitchNavigator({
    Repositories,
    Issues
  })
);

export default Routes;
