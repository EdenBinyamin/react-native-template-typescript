import React, { useState } from "react";
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import SvgIcon from "../../../../SvgIcon";
import BlueButton from "../../../components/BlueButton/BlutButton";
import BoldText from "../../../components/BoldText/BoldText";
import MediumText from "../../../components/MediumText/MediumText";
import PressButton from "../../../components/PressButton/PressButton";
import RegularText from "../../../components/RegularText/RegularText";
import { wp } from "../../../helpers/responsive";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../rootReducer";
import {
  authSetIsPasswordMatchToSecondPassAction,
  authSetIsPasswordValidAction,
  authSetPasswordAction,
  authSetSecondPasswordAction,
  authUpdateFlowStepAction,
} from "../actions/auth.action";
import PasswordInput from "../../../components/PasswordInput/PasswordInput";
import { MediaType } from "react-native-image-picker";
import { captureImage } from "../../../utils/camera";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import { User } from "../../../models/User.model";
import { Colors } from "../../../constants/colors";

const user: User = { name: "יעלי" };

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
  const [t, i18n] = useTranslation();

  const renderPasswordNotValid = (): JSX.Element => {
    return (
      <>
        {password.length === 0 ? (
          <MediumText style={styles.passwordNotValid}>
            {t("register.registeration.lengthZero")}
          </MediumText>
        ) : (
          <MediumText style={styles.passwordNotValid}>
            {t("register.registeration.passwordDetails")}
          </MediumText>
        )}
      </>
    );
  };

  const renderPasswordNotMatch = () => (
    <MediumText style={styles.passwordNotValid}>
      {t("register.registeration.matchingPassword")}
    </MediumText>
  );

  const renderFirstStep = () => (
    <>
      <PasswordInput
        passwordText={t("register.registeration.password")}
        placeholder={t("register.registeration.typePassword")}
        action={authSetPasswordAction}
        onBlur={authSetIsPasswordValidAction}
        renderPasswordNotValid={renderPasswordNotValid}
        isPasswordNotValid={!isPasswordValid}
        value={password}
      />
      <PasswordInput
        passwordText={t("register.registeration.passwordAuthentication")}
        placeholder={t("register.registeration.typeAgain")}
        action={authSetSecondPasswordAction}
        onBlur={authSetIsPasswordMatchToSecondPassAction}
        renderPasswordNotValid={renderPasswordNotMatch}
        isPasswordNotValid={!isPasswordMatchToSecondPassword}
        value={secondPassword}
      />
    </>
  );

  const renderPencilSvg = () => (
    <SvgIcon
      fill={Colors.deepBlue}
      supportRtl={false}
      width={41}
      height={33}
      name={"pencil"}
      viewBox={"0 0 41 33"}
      style={styles.pencil}
    />
  );

  const renderProfilePhoto = () => (
    <>
      <Image style={styles.image} source={{ uri: profilePhoto.uri }} />
      <TouchableOpacity
        onPress={() => captureImage()}
        style={styles.pencilCircle}
      >
        {renderPencilSvg()}
      </TouchableOpacity>
    </>
  );

  const renderCameraSvg = () => (
    <SvgIcon
      fill={"rgb(16,0,76)"}
      supportRtl={false}
      width={41}
      height={33}
      name={"camera"}
      viewBox={"0 0 41 33"}
      style={{ position: "relative" }}
    />
  );

  const renderUploadPhoto = () => (
    <View style={styles.photoCircle}>
      {renderCameraSvg()}
      <MediumText>{t("register.registeration.addPicture")}</MediumText>
    </View>
  );

  const renderSecondStep = () => (
    <View>
      {profilePhoto?.uri ? (
        renderProfilePhoto()
      ) : (
        <PressButton
          onPress={() => captureImage()}
          content={() => renderUploadPhoto()}
        />
      )}
    </View>
  );

  const renderRightArrowSvg = () => (
    <SvgIcon
      fill={"rgb(16,0,76)"}
      supportRtl={false}
      width={7}
      height={11}
      name={"rightArrow"}
      viewBox={"0 0 7 11"}
    />
  );

  const renderGoBackButton = () => (
    <PressButton
      onPress={() => dispatch(authUpdateFlowStepAction(1))}
      content={
        <View style={styles.goBackContainer}>
          {renderRightArrowSvg()}
          <BoldText style={{ fontSize: 18, marginLeft: 12 }}>
            {t("register.registeration.goBack")}
          </BoldText>
        </View>
      }
    />
  );

  const renderSecondStepContainer = () => (
    <View style={styles.secondStepContainer}>
      {renderSecondStep()}
      <View style={styles.buttonsContainer}>
        {renderGoBackButton()}
        <BlueButton
          // disabled={!isPasswordValid || !isPasswordMatchToSecondPassword}
          proceed={t("register.registeration.register")}
          action={() =>
            dispatch(authUpdateFlowStepAction(flowStep === 1 ? 2 : 1))
          }
        />
      </View>
    </View>
  );

  const renderFirstStepContainer = () => (
    <View style={styles.firstStepContainer}>
      {renderFirstStep()}
      <BlueButton
        // disabled={!isPasswordValid || !isPasswordMatchToSecondPassword}
        proceed={t("register.registeration.continue")}
        action={() =>
          dispatch(authUpdateFlowStepAction(flowStep === 1 ? 2 : 1))
        }
      />
    </View>
  );

  const renderHeaderFlowStep = (bold: string, regular: string) => (
    <>
      <BoldText style={styles.header}>{bold}</BoldText>
      <RegularText style={styles.photoText}>{regular}</RegularText>
    </>
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      {flowStep === 1
        ? renderHeaderFlowStep(
            t("register.registeration.header", { name: user.name }),
            t("register.registeration.details")
          )
        : renderHeaderFlowStep(
            t("register.registeration.profilePicture"),
            t("register.registeration.takePicture")
          )}
      {flowStep === 1
        ? renderFirstStepContainer()
        : renderSecondStepContainer()}
    </SafeAreaView>
  );
};
export default RegisterPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  firstStepContainer: {
    flex: 0.7,
    width: wp("86.2%"),
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
  },
  secondStepContainer: {
    flex: 0.7,
    width: wp("86.2%"),
    position: "absolute",
    top: wp("50%"),
    bottom: wp("50%"),
    alignSelf: "center",
    justifyContent: "center",
  },
  header: {
    color: Colors.deepBlue,
    fontSize: 25,
    marginTop: 51,
    marginLeft: "auto",
    marginRight: "auto",
  },
  goBackContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 48,
    marginRight: 33,
  },
  photoText: {
    marginTop: 12,
    width: wp("60%"),
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
    marginTop: 100,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
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
  pencilCircle: {
    position: "absolute",
    borderRadius: 75,
    width: 46,
    height: 46,
    backgroundColor: "#10004C",
    left: "65%",
    bottom: "10%",
  },
  pencil: {
    position: "absolute",
    top: "32%",
    left: -7,
  },
  passwordNotValid: {
    color: "#FF0000",
  },
  buttonsContainer: {
    position: "absolute",
    top: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});
