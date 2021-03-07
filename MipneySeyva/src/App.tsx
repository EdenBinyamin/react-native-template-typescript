import React from "react";
import { StatusBar, I18nManager } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import NavigationWrapper from "./navigation/NavigationContainer";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <NavigationWrapper />
      </Provider>
    </I18nextProvider>
  );
};

export default App;
