import React, { useEffect } from "react";
import { I18nManager } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import NavigationWrapper from "./navigation/NavigationContainer";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
// import messaging from "@react-native-firebase/messaging";
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App: React.FC = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   messaging()
  //     .getToken()
  //     .then((token) => {
  //       return console.log(token);
  //     });
  //   messaging().onMessage(message => console.log(message))
  // }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <NavigationWrapper />
      </Provider>
    </I18nextProvider>
  );
};

export default App;
