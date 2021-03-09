import React, { useEffect, useRef, useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import SvgIcon from "../../../../SvgIcon";
import PressButton from "../../../components/PressButton/PressButton";
import Settings from "../../../components/Settings/Settings";
import { hp, wp } from "../../../helpers/responsive";
import { NavigatorProps } from "../../../navigation/AppNavigator";
import { authSetIsSettingsOpenAction } from "../../auth/actions/auth.action";
import Video from "react-native-video";
import BoldText from "../../../components/BoldText/BoldText";

const MainScreen = (navigation: NavigatorProps) => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Video
        ref={videoRef}
        repeat
        source={require("../../../../assets/main_screen.mp4")} // Can be a URL or a local file.
        onError={() => console.log("error")}
        style={styles.backgroundVideo}
        resizeMode="cover"
      />
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
      </View>
      <View style={styles.textContainer}>
        <BoldText style={styles.moments}>רגעים</BoldText>
        <BoldText style={styles.of}>של</BoldText>
        <BoldText style={styles.together}>יחד</BoldText>
      </View>
      <Settings {...navigation} />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },
  backgroundVideo: {
    position: "absolute",

    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  header: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    width: wp("90%"),
  },
  settings: {
    backgroundColor: "#6F6F6F",
    minHeight: 312,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  textContainer: {
    position: "absolute",
    bottom: 100,
    width: 220,
    marginLeft: 50,
  },
  moments: {
    fontSize: 50,
    color: "white",
    // lineHeight:80,
    textAlign: "left",
  },
  of: {
    fontSize: 50,
    color: "white",
    // lineHeight:70,
    textAlign: "left",
    marginTop: -20,
  },
  together: {
    fontSize: 70,
    color: "white",
    lineHeight: 80,
    textAlign: "left",
  },
});
