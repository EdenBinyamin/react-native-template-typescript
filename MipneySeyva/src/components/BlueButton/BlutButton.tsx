import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Fonts } from "../../constants/fonts";
import PressButton from "../PressButton/PressButton";

type params = string | string[] | number | number | undefined;

interface Props {
  proceed: string;
  action: (params: params) => void;
  params?: params;
  disabled?: boolean;
}

const BlueButton: React.FC<Props> = (props: Props) => {
  const { proceed, action, params, disabled } = props;
  return (
    <View style={styles.wrapper}>
      <PressButton
        disabled={disabled ?? false}
        onPress={() => action(params)}
        content={<Text style={styles.blueButton}>{proceed}</Text>}
        style={styles.container}
      />
    </View>
  );
};

export default BlueButton;

const styles = StyleSheet.create({
  wrapper: {
    width: 179,
    height: 56,
    marginTop: 52,
    marginLeft: "auto",
    marginRight: "auto",
  },
  container: {
    width: 179,
    height: 56,
    backgroundColor: "#182141",
    borderRadius: 75,
    borderColor: "rgb(83,121,238)",
    // borderWidth: 1,
  },
  blueButton: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 30,
    fontSize: 23,
    lineHeight: 14,
    color: "white",
    fontFamily: Fonts.regular,
    maxWidth: "85%",
  },
});
