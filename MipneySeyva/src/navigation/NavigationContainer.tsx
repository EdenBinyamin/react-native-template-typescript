import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./AppNavigator";
import { StyleSheet } from "react-native";
import { enableScreens } from "react-native-screens";

const isReadyRef = (React.createRef() as unknown) as React.RefObject<NavigationContainerRef>;
const navigationRef = (React.createRef() as unknown) as React.RefObject<NavigationContainerRef>;

enableScreens();

const NavigationWrapper = () => (
  <NavigationContainer
    //@ts-ignore
    onReady={() => (isReadyRef.current = true)}
    ref={navigationRef}
  >
    <SafeAreaProvider style={styles.container}>
      <AppNavigator />
    </SafeAreaProvider>
  </NavigationContainer>
);

export default NavigationWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
