import React from "react";
import "react-native-gesture-handler";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import RegisterPage from "../pages/auth/RegisterPage/RegisterPage";
import SmsPassworVarifacationdPage from "../pages/auth/SmsPassworVarifacationdPage/SmsPassworVarifacationdPage";

const Stack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  SmsPassworVarifacationdPage: undefined;
  RegisterPage: undefined;
};

export type NavigatorNavigationProps = StackNavigationProp<
  RootStackParamList,
  "RegisterPage"
>;

export type NavigatorProps = {
  navigation: NavigatorNavigationProps;
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"RegisterPage"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
      <Stack.Screen
        name="SmsPassworVarifacationdPage"
        component={SmsPassworVarifacationdPage}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator
