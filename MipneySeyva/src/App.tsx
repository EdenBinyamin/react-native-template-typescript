import React from "react";
import { StatusBar, I18nManager } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import NavigationWrapper from "./navigation/NavigationContainer";

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <NavigationWrapper />
    </Provider>
  );
};

export default App;
