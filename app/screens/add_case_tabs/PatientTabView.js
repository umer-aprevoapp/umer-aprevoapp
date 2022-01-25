import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../../assets/colors/Color";
import FloatingTextInput from "../../components/FloatingTextInput";
import { RFValue } from "react-native-responsive-fontsize";
import { SCREEN_NAMES } from "../../../assets";
import IForwardButton from "../../components/IForwardButton";
import INextButton from "../../components/INextButton";

const PatientTabView = (props) => {
  const caseAddedAlert = () => {
    Alert.alert("Case Added", "New Case Successfully Added!", [
      {
        text: "OK",
        onPress: () => {
          props.navigation.navigate(SCREEN_NAMES.CASE_LIST_SCREEN);
        },
      },
    ]);
  };
  return (
    <View
      style={{
        flex: 1,
        marginVertical: RFValue(50),
        marginHorizontal: RFValue(20),
      }}
    >
      <FloatingTextInput label="First Name*" style={styles.textInputStyle} />
      <FloatingTextInput label="Middle Name" style={styles.textInputStyle} />
      <FloatingTextInput label="Last Name*" style={styles.textInputStyle} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: RFValue(30),
        }}
      >
        <IForwardButton
          label="Previous"
          style={styles.nextButtonStyle}
          goToNextForm={() => {
            props.navigation.navigate(SCREEN_NAMES.CASE_DETAILS);
          }}
        />
        <INextButton
          label="Finish"
          style={styles.nextButtonStyle}
          goToNextForm={caseAddedAlert}
        />
      </View>
    </View>
  );
};

export default PatientTabView;

const styles = StyleSheet.create({
  nextButtonStyle: {
    marginVertical: RFValue(10),
    backgroundColor: Color.grey,
    alignItems: "flex-end",
    alignSelf: "flex-end",
    borderRadius: RFValue(8),
    padding: RFValue(10),
  },
  textInputStyle: {
    marginVertical: RFValue(10),
  },
});
