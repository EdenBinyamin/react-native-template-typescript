import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
} from "react-native";
import SvgIcon from "../../../../SvgIcon";
import BlueButton from "../../../components/BlueButton/BlutButton";
import BoldText from "../../../components/BoldText/BoldText";
import MediumText from "../../../components/MediumText/MediumText";
import PressButton from "../../../components/PressButton/PressButton";
import RegularText from "../../../components/RegularText/RegularText";
import { wp } from "../../../helpers/responsive";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../rootReducer";
import {
  authSetIsPasswordMatchToSecondPassAction,
  authSetIsPasswordValidAction,
  authSetPasswordAction,
  authSetPhotoAction,
  authSetSecondPasswordAction,
  authUpdateFlowStepAction,
} from "../actions/auth.action";
import PasswordInput from "../../../components/PasswordInput/PasswordInput";
import { MediaType } from "react-native-image-picker";
import { captureImage } from "../../../utils/camera";

const RegisterPage = () => {
  const {
    password,
    secondPassword,
    flowStep,
    profilePhoto,
    isPasswordValid,
    isPasswordMatchToSecondPassword,
  } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const renderPasswordNotValid = (): JSX.Element => {
    return (
      <>
        {password.length === 0 ? (
          <MediumText style={styles.passwordNotValid}>
            יש להזין סיסמה
          </MediumText>
        ) : (
          <MediumText style={styles.passwordNotValid}>
            יש להזין סיסמה בעלת 8 תווים שתכלול אותיות ומספרים
          </MediumText>
        )}
      </>
    );
  };

  const renderPasswordNotMatch = () => (
    <MediumText style={styles.passwordNotValid}>
      יש להזין סיסמה תואמת לסיסמה שהקלדת
    </MediumText>
  );

  const renderFlowStep = () => (
    <>
      <PasswordInput
        passwordText={"סיסמה"}
        placeholder={"הזן סיסמה"}
        action={authSetPasswordAction}
        onBlur={authSetIsPasswordValidAction}
        renderPasswordNotValid={renderPasswordNotValid}
        isPasswordNotValid={!isPasswordValid}
        value={password}
      />
      <PasswordInput
        passwordText={"אימות סיסמה"}
        placeholder={"הזן סיסמה פעם נוספת"}
        action={authSetSecondPasswordAction}
        onBlur={authSetIsPasswordMatchToSecondPassAction}
        renderPasswordNotValid={renderPasswordNotMatch}
        isPasswordNotValid={!isPasswordMatchToSecondPassword}
        value={secondPassword}
      />
    </>
  );

  const renderProfilePhoto = () => (
    <>
      <Image style={styles.image} source={{ uri: profilePhoto.uri }} />
      <View style={styles.pencilCircle}>
        <SvgIcon
          fill={Colors.deepBlue}
          supportRtl={false}
          width={41}
          height={33}
          name={"pencil"}
          viewBox={"0 0 41 33"}
          style={styles.pencil}
        />
      </View>
    </>
  );

  const renderUploadPhoto = () => (
    <View style={styles.photoCircle}>
      <SvgIcon
        fill={"rgb(16,0,76)"}
        supportRtl={false}
        width={41}
        height={33}
        name={"camera"}
        viewBox={"0 0 41 33"}
        style={{ position: "relative" }}
      />
      <MediumText>הוסף תמונה</MediumText>
    </View>
  );

  const renderSecondStep = () => (
    <>
      <PressButton
        onPress={() => captureImage()}
        content={() =>
          profilePhoto?.fileName ? renderProfilePhoto() : renderUploadPhoto()
        }
      />
    </>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.flowContainer}></View>
      <BoldText style={styles.header}>הרשמה</BoldText>
      {flowStep === 2 ? (
        <RegularText style={styles.photoText}>
          הכנס את תמונת הפרופיל שלך שתוצג לבני המשפחה שלך
        </RegularText>
      ) : null}
      <View style={styles.container}>
        {flowStep === 1 ? renderFlowStep() : renderSecondStep()}

        <BlueButton
          // disabled={!isPasswordValid || !isPasswordMatchToSecondPassword}
          proceed={"המשך"}
          action={() =>
            dispatch(authUpdateFlowStepAction(flowStep === 1 ? 2 : 1))
          }
        />
      </View>
    </View>
  );
};
export default RegisterPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  container: {
    flex: 0.7,
    width: wp("86.2%"),
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
  },
  header: {
    color: Colors.deepBlue,
    fontSize: 25,
    marginTop: 51,
    marginLeft: "auto",
    marginRight: "auto",
  },

  photoText: {
    marginTop: 12,
    width: wp("50%"),
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  photoCircle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp("50%"),
    marginLeft: "auto",
    marginRight: "auto",
    width: wp("50"),
    height: wp("50%"),
    borderColor: Colors.deepBlue,
    borderWidth: 1,
  },
  flowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  pencilCircle: {
    // paddingTop: 50,
    position: "absolute",
    borderRadius: 75,
    width: 46,
    height: 46,
    backgroundColor: "#10004C",
    bottom: 10,
    left: "65%",
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 200,
    borderWidth: 1,
    borderColor: "#16006F",
  },
  pencil: {
    position: "absolute",
    top: "32%",
    left: -7,
  },
  passwordNotValid: {
    color: "#FF0000",
  },
});
