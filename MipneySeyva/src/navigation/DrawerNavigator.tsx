import React from "react";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import AppNavigator from "./AppNavigator";
import { hp, wp } from "../helpers/responsive";
import { View } from "react-native";
import RegularText from "../components/RegularText/RegularText";
import Settings from "../components/Settings/Settings";

const Drawer = createDrawerNavigator<MenuDrawerParamList>();

export type MenuDrawerParamList = {
  AppNavigator: undefined;
};

export type DrawerNavigationProps = DrawerNavigationProp<MenuDrawerParamList>;

export type DrawerProps = {
  navigation: DrawerNavigationProps;
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={"AppNavigator"}
      drawerPosition={"left"}
      drawerStyle={{
        width: wp("100%"),
      }}
    >
      <Drawer.Screen name="AppNavigator" component={AppNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
