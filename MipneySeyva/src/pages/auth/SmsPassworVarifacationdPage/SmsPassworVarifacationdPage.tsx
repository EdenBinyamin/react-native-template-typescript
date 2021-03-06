import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import BoldText from "../../../components/BoldText/BoldText";
import CodeInput from "../../../components/CodeInput/CodeInput";
import RegularText from "../../../components/RegularText/RegularText";
import { wp } from "../../../helpers/responsive";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { Fonts } from "../../../constants/fonts";
import MediumText from "../../../components/MediumText/MediumText";
import SvgIcon from "../../../../SvgIcon";

const SmsPassworVarifacationdPage = () => {
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <BoldText style={styles.bold}>קוד אימות</BoldText>
      <RegularText style={styles.regular}>
        הזן בבקשה את קוד האימות שנשלח אליך
      </RegularText>
      {/* <CodeInput /> */}
      <View style={styles.input}>
        <SmoothPinCodeInput
          onTextChange={(text) => setPassword(text)}
          animated={false}
          cellSpacing={15}
          cellStyle={styles.cell}
          value={password}
          codeLength={6}
          restrictToNumbers
          keyboardType={"phone-pad"}
          textStyle={styles.textStyle}
        />
      </View>
      <MediumText style={styles.wrongInput}>הקוד שגוי, נסה שוב</MediumText>


    </SafeAreaView>
  );
};

export default SmsPassworVarifacationdPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
  },
  bold: {
    fontSize: 25,
    marginTop: 100,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#10004C",
  },
  regular: {
    marginTop: 14,
    width: wp("48.53%"),
    alignItems: "center",
    color: "#10004C",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  input: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 70,
  },
  cell: {
    borderColor: "gray",
    // borderWidth: 1,
    borderRadius: 75,
    backgroundColor: "white",
    shadowColor: "rgba(0,0,0,0.2)",
    elevation: 15,
    // fontFamily: Fonts.bold,
  },
  textStyle: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    color: "rgb(35,35,35)",
  },
  wrongInput: {
    marginTop: 14,
    fontSize: 16,
    color: "rgb(255,0,0)",
  },
});
