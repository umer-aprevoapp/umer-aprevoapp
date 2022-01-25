import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { RFValue } from "react-native-responsive-fontsize";
import { DROPDOWN_DIRECTION, GET_DROPDOWN_DIRECTION } from "../../../assets";
import ITextView from "../../components/ITextView";
import Color from "../../../assets/colors/Color";
import { ModalDatePicker } from "react-native-material-date-picker";
import Moment from "moment";
import FontAwsomeIcon from "../../components/FontAwsomeIcon";
import CheckBox from "expo-checkbox";
import font from "../../../assets/fonts/font";
import ISpinner from "../../components/ISpinner";
import FloatingTextInput from "../../components/FloatingTextInput";
import INextButton from "../../components/INextButton";
import { ScrollView } from "react-native-gesture-handler";

const CaseDetailsTabView = (props) => {
  // const [direction, setDirection] = useState(
  //   GET_DROPDOWN_DIRECTION(DROPDOWN_DIRECTION.DEFAULT)
  // );
  const [receivedDate, setReceivedDate] = useState(
    Moment(new Date()).format("DD/MM/yyyy")
  );
  const [surgeryDate, setSurgeryDate] = useState(
    Moment(new Date()).format("DD/MM/yyyy")
  );

  //surgeon dropdown
  const [surgeonItems, setSurgeonItems] = useState([
    { label: "Dr. Smith", value: "smith" },
    { label: "Dr. Jeff", value: "jeff" },
    { label: "Dr. Shariq", value: "shariq" },
  ]);

  // assigned to dropdown
  const [assignedToItems, setAssignedToItems] = useState([
    { label: "Shariq Hussain", value: "shariq_hussain" },
    { label: "Khurram Nisar", value: "khurram_nisar" },
    { label: "Umer Abidin", value: "umer_abidin" },
    { label: "Jeff", value: "jeff" },
  ]);

  //  // approve specialist dropdown
  const [specialistItems, setSpecialistItems] = useState([
    { label: "Shariq Hussain", value: "shariq_hussain" },
    { label: "Khurram Nisar", value: "khurram_nisar" },
    { label: "Umer Abidin", value: "umer_abidin" },
    { label: "Jeff", value: "jeff" },
  ]);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View
        style={{
          marginHorizontal: RFValue(20),
          marginVertical: RFValue(30),

          flex: 1,
        }}
      >
        <ScrollView
          overScrollMode="auto"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.rowParentStyle}>
            <View style={styles.rowStyleContainerStyle}>
              <ITextView
                text="Received Date*"
                style={{
                  width: "60%",
                  fontSize: RFValue(13),
                }}
              />

              <View style={styles.dateViewContainer}>
                <ModalDatePicker
                  button={
                    <Text style={styles.dateTextStyle}>{receivedDate}</Text>
                  }
                  locale="en"
                  onSelect={(date) => {
                    setReceivedDate(Moment(date).format("DD/MM/yyyy"));
                  }}
                  isHideOnSelect={true}
                  initialDate={new Date()}
                />
                <FontAwsomeIcon
                  name="calendar"
                  fontSize={RFValue(15)}
                  style={{ width: "20%", marginStart: RFValue(5) }}
                />
              </View>
            </View>
            <View style={{ ...styles.viewDivider }}></View>
          </View>

          <View style={styles.rowParentStyle}>
            <View style={styles.rowStyleContainerStyle}>
              <ITextView
                text="Surgery Date"
                style={{
                  width: "60%",
                  fontSize: RFValue(13),
                }}
              />

              <View style={styles.dateViewContainer}>
                <ModalDatePicker
                  button={
                    <Text style={styles.dateTextStyle}>{surgeryDate}</Text>
                  }
                  locale="en"
                  onSelect={(date) => {
                    setSurgeryDate(Moment(date).format("DD/MM/yyyy"));
                  }}
                  isHideOnSelect={true}
                  initialDate={new Date()}
                />
                <FontAwsomeIcon
                  name="calendar"
                  fontSize={RFValue(15)}
                  style={{ width: "20%", marginStart: RFValue(5) }}
                />
              </View>
            </View>
            <View style={{ ...styles.viewDivider }}></View>
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox
              checkBoxTintColor={Color.black}
              value={toggleCheckBox}
              onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
              color={toggleCheckBox ? Color.primary : undefined}
            />
            <Text style={styles.label}>Tentative</Text>
          </View>

          <View
            style={[
              styles.rowParentStyle,
              { flexDirection: "column", zIndex: 3000 },
            ]}
          >
            <View style={styles.rowStyleContainerStyle}>
              <ITextView
                text="Surgeon Name"
                style={{ width: "60%", fontSize: RFValue(13) }}
              />
              <ISpinner items={surgeonItems} setItems={setSurgeonItems} />
            </View>
            <View style={{ ...styles.viewDivider }}></View>
          </View>
          <View
            style={[
              styles.rowParentStyle,
              { flexDirection: "column", zIndex: 2000 },
            ]}
          >
            <View style={styles.rowStyleContainerStyle}>
              <ITextView
                text="Assigned To"
                style={{ width: "60%", fontSize: RFValue(13) }}
              />
              <ISpinner items={assignedToItems} setItems={setAssignedToItems} />
            </View>
            <View style={{ ...styles.viewDivider }}></View>
          </View>
          <View
            style={[
              styles.rowParentStyle,
              { flexDirection: "column", zIndex: 1000 },
            ]}
          >
            <View style={styles.rowStyleContainerStyle}>
              <ITextView
                text="aprevo Specialist:"
                style={{ width: "60%", fontSize: RFValue(13) }}
              />
              <ISpinner items={specialistItems} setItems={setSpecialistItems} />
            </View>
            <View style={{ ...styles.viewDivider }}></View>
          </View>

          <View style={{ marginTop: RFValue(20) }}>
            <FloatingTextInput
              label="Pelvic Incidence (PI)"
              style={{ marginVertical: RFValue(10) }}
            />
            <FloatingTextInput
              label="Lumbar Lodosis (LL)"
              style={{ marginVertical: RFValue(10) }}
            />
            <FloatingTextInput
              label="Lumbar Coronal Cobb"
              style={{ marginVertical: RFValue(10) }}
            />
          </View>
          <INextButton
            style={styles.nextButtonStyle}
            goToNextForm={() => {
              props.navigation.navigate("Inter Body");
            }}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CaseDetailsTabView;

const styles = StyleSheet.create({
  viewDivider: {
    width: "100%",
    borderColor: Color.grey,
    borderWidth: 0.5,
  },
  dateTextStyle: {
    borderColor: Color.black,
    borderWidth: RFValue(1),
    padding: RFValue(2),
  },
  dateViewContainer: {
    width: "40%",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end",
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginEnd: RFValue(15),
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: RFValue(5),
    fontFamily: font.opensans_medium,
  },
  dropDownStyle: {
    width: "40%",
    height: RFValue(25),
    backgroundColor: Color.primary,
  },
  nextButtonStyle: {
    marginVertical: RFValue(10),

    backgroundColor: Color.grey,
    alignItems: "flex-end",
    alignSelf: "flex-end",
    borderRadius: RFValue(8),
    padding: RFValue(10),
  },
  rowStyleContainerStyle: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  rowParentStyle: {
    marginVertical: RFValue(10),
  },
});
