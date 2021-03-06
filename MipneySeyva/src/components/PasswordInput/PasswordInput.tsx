import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import SvgIcon from "../../../SvgIcon";
import { Colors } from "../../constants/colors";
import { wp } from "../../helpers/responsive";
import {
  AuthSetIsPasswordValid,
  AuthSetIsPasswordMatchToSecondPass,
  AuthSetPassword,
  AuthSetSecondPassword,
} from "../../pages/auth/actionTypes/auth.actionTypes";
import BoldText from "../BoldText/BoldText";
import PressButton from "../PressButton/PressButton";

interface Props {
  passwordText: string;
  placeholder: string;
  action: (password: string) => AuthSetPassword | AuthSetSecondPassword;
  onBlur: () => AuthSetIsPasswordValid | AuthSetIsPasswordMatchToSecondPass;
  renderPasswordNotValid: () => JSX.Element;
  isPasswordNotValid: boolean;
  value: string;
}

const PasswordInput: React.FC<Props> = ({
  passwordText,
  placeholder,
  action,
  onBlur,
  renderPasswordNotValid,
  isPasswordNotValid,
  value,
}: Props) => {
  const dispatch = useDispatch();
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [showEye, setShowEye] = useState(false);
  return (
    <>
      <BoldText style={styles.password}>{passwordText}</BoldText>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onChangeText={(text: string) => dispatch(action(text))}
          onBlur={() => {
            setPasswordTouched(true);
            dispatch(onBlur());
          }}
          secureTextEntry={!showEye}
        />
        {value.length > 0 ? (
          <PressButton
            style={styles.eye}
            onPress={() => setShowEye(!showEye)}
            content={
              <SvgIcon
                supportRtl={false}
                width={20}
                height={15}
                name={showEye ? "eye" : "eyeOff"}
                viewBox={"0 0 20 15"}
                style={styles.eye}
              />
            }
          />
        ) : null}
      </View>
      {isPasswordNotValid && passwordTouched ? renderPasswordNotValid() : null}
    </>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  password: {
    color: Colors.deepBlue,
    marginTop: 24,
    fontSize: 16,
    textAlign: "left",
  },
  inputContainer: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 5,
    paddingHorizontal: 21,
    justifyContent: "space-between",
  },
  input: {
    // width: wp("80%"),
    textAlign: "right",
  },
  eye: {
    // position: "absolute",
    // left: wp("25%"),
    // top: wp("4%"),
    // backgroundColor: ""
  },
});
