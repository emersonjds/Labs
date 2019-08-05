import { NavigationActions } from 'react-navigation';

let navigator;

export function setNavigator(ref) {
  navigator = ref;
}

export function navigate(routerName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routerName,
      params,
    }),
  );
}
