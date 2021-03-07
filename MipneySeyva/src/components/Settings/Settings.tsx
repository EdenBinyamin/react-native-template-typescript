/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { StatusBar, StyleSheet, View, Platform } from "react-native";
import Collapsible from "react-native-collapsible";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import SvgIcon from "../../../SvgIcon";
import { LANGUAGES } from "../../constants/languages";
import { wp } from "../../helpers/responsive";
import BoldText from "../BoldText/BoldText";
import MediumText from "../MediumText/MediumText";
import Modal from "react-native-modal";
import { authSetIsSettingsOpenAction } from "../../pages/auth/actions/auth.action";
import { RootState } from "../../rootReducer";
import { NavigatorProps } from "../../navigation/AppNavigator";
import PressButton from "../PressButton/PressButton";
import { TouchableOpacity } from "react-native-gesture-handler";

type card = { optionName: string; screenName?: string };

const Settings: React.FC<NavigatorProps> = (props: NavigatorProps) => {
  const isAndroid = Platform.OS === "android";
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const [isCollpased, setIsCollapsed] = useState(true);
  const isSettingsOpen = useSelector(
    (state: RootState) => state.auth.isSettingsOpen
  );
  const renderModal = () => {
    return (
      <Modal
        animationIn="slideInDown"
        animationOut="slideOutUp"
        isVisible={isSettingsOpen}
        style={{ ...styles.container, maxHeight: isCollpased ? 312 : 732 }}
      >
        <View style={styles.container}>{renderModalContent()}</View>
      </Modal>
    );
  };

  const renderModalContent = () => (
    <>
      {renderHeader()}
      {renderBorder()}
      {renderLanguageContainer()}
      {renderBorder()}
      {renderNavigationTo("EditProfile")}
      {renderBorder()}
      {renderNavigationTo("Login")}
    </>
  );

  const renderCloseIcon = () => (
    <SvgIcon
      fill={"white"}
      width={25}
      height={25}
      name={"x"}
      viewBox={"0 0 25 25"}
      style={{ backgroundColor: "#6F6F6F" }}
    />
  );

  const renderCloseButton = () => (
    <>
      {isAndroid ? (
        <PressButton
          onPress={() => dispatch(authSetIsSettingsOpenAction(false))}
          content={renderCloseIcon()}
        />
      ) : (
        <TouchableOpacity
          onPress={() => dispatch(authSetIsSettingsOpenAction(false))}
        >
          {renderCloseIcon()}
        </TouchableOpacity>
      )}
    </>
  );

  const renderBorder = () => <View style={styles.border} />;

  const renderLanguageSvg = () => (
    <SvgIcon
      fill={"white"}
      width={isCollpased ? 10 : 9}
      height={isCollpased ? 10 : 1}
      name={isCollpased ? "plus" : "minus"}
      viewBox={isCollpased ? "0 0 10 10" : "0 0 9 1"}
      style={{ backgroundColor: "#6F6F6F", marginRight: 8 }}
    />
  );

  const renderLanguageText = () => (
    <View style={styles.languagesHeader}>
      {renderLanguageSvg()}
      <MediumText style={{ ...styles.settingsText }}>
        {t("register.settings.languages")}
      </MediumText>
    </View>
  );

  const renderLanguageHeader = () => (
    <>
      {isAndroid ? (
        <PressButton
          onPress={() => setIsCollapsed(!isCollpased)}
          content={renderLanguageText()}
        />
      ) : (
        <TouchableOpacity onPress={() => setIsCollapsed(!isCollpased)}>
          {renderLanguageText()}
        </TouchableOpacity>
      )}
    </>
  );

  const renderLanguageCollapsed = () => (
    <Collapsible
      collapsed={isCollpased}
      collapsedHeight={0}
      style={styles.collapsible}
    >
      {LANGUAGES.map((language) => (
        <MediumText style={styles.language} key={language}>
          {language}
        </MediumText>
      ))}
    </Collapsible>
  );

  const renderLanguageContainer = () => (
    <View>
      {renderLanguageHeader()}
      {renderLanguageCollapsed()}
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <BoldText style={styles.headerText}>
        {t("register.settings.header")}
      </BoldText>
      {renderCloseButton()}
    </View>
  );

  const renderNavigationText = (isEditProfile: boolean) => (
    <MediumText
      style={{
        ...styles.settingsText,
        color: isEditProfile ? "white" : "rgb(255,0,1)",
      }}
    >
      {t(
        `register.settings.${isEditProfile ? "editProfilePicutre" : "logout"}`
      )}
    </MediumText>
  );

  const renderNavigationTo = (navigationTo: "EditProfile" | "Login") => {
    const isEditProfile = navigationTo === "EditProfile";
    return (
      <>
        {isAndroid ? (
          <PressButton
            style={styles.navigationContainer}
            onPress={() => props.navigation.navigate(navigationTo)}
            content={renderNavigationText(isEditProfile)}
          />
        ) : (
          <TouchableOpacity
            style={styles.navigationContainer}
            onPress={() => props.navigation.navigate(navigationTo)}
          >
            {renderNavigationText(isEditProfile)}
          </TouchableOpacity>
        )}
      </>
    );
  };

  return renderModal();
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6F6F6F",
    marginTop: -5,
    height: 312,
    width: wp("100%"),
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("87.6%"),
    marginLeft: "auto",
    marginRight: "auto",
    height: 72,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
  border: {
    borderColor: "#EAEBF3",
    borderBottomWidth: 0.5,
  },
  languagesHeader: {
    flexDirection: "row",
    alignItems: "center",
    width: wp("87.6%"),
    marginLeft: "auto",
    marginRight: "auto",
    height: 72,
  },
  settingsText: {
    fontSize: 16,
    color: "white",
  },
  language: {
    paddingBottom: 28,
    fontSize: 16,
    color: "rgb(111,111,111)",
    width: wp("87.6%"),
    marginLeft: "auto",
    marginRight: "auto",
    height: 72,
    backgroundColor: "#EAEBF3",
  },
  navigationContainer: {
    width: wp("87.6%"),
    marginLeft: "auto",
    marginRight: "auto",
    height: 72,
    justifyContent: "center",
  },
  collapsible: {
    width: wp("100%"),
    backgroundColor: "#EAEBF3",
    paddingTop: 28,
  },
});
