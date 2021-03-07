import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import SvgIcon from "../../../../SvgIcon";
import PressButton from "../../../components/PressButton/PressButton";
import Settings from "../../../components/Settings/Settings";
import { hp, wp } from "../../../helpers/responsive";
import { NavigatorProps } from "../../../navigation/AppNavigator";
import { DrawerProps } from "../../../navigation/DrawerNavigator";
import { authSetIsSettingsOpenAction } from "../../auth/actions/auth.action";

const MainScreen = (navigation: NavigatorProps) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <PressButton
          onPress={() => dispatch(authSetIsSettingsOpenAction(true))}
          content={
            <SvgIcon
              fill={"white"}
              supportRtl={false}
              width={38}
              height={37}
              name={"settings"}
              viewBox={"0 0 38 37"}
            />
          }
        />
        <View style={{ backgroundColor: "blue", width: 50, height: 50 }}></View>
      </View>
      <Settings {...navigation} />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  header: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    width: wp("95%"),
  },
  settings: {
    backgroundColor: "#6F6F6F",
    minHeight: 312,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
});
