import React from "react";
import "react-native-gesture-handler";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import RegisterPage from "../pages/auth/RegisterPage/RegisterPage";
import SmsPassworVarifacationdPage from "../pages/auth/SmsPassworVarifacationdPage/SmsPassworVarifacationdPage";
import MainScreen from "../pages/homepage/MainScreen/MainScreen";
import { StatusBar } from "react-native";

const Stack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  SmsPassworVarifacationdPage: undefined;
  RegisterPage: undefined;
  MainScreen: undefined;
  Login: undefined;
  EditProfile: undefined;
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
      initialRouteName={"MainScreen"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
      <Stack.Screen
        name="SmsPassworVarifacationdPage"
        component={SmsPassworVarifacationdPage}
      />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="EditProfile" component={MainScreen} />
      <Stack.Screen name="Login" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
