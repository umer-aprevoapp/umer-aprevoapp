import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ModalDatePicker } from "react-native-material-date-picker";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../assets/colors/Color";
import font from "../../assets/fonts/font";
import FontAwsomeIcon from "../components/FontAwsomeIcon";
import ISpinner from "../components/ISpinner";
import ITextView from "../components/ITextView";
import Moment from "moment";

import ICheckBox from "../components/ICheckBox";
import IButton from "../components/IButton";
import { ScrollView } from "react-native-gesture-handler";

function FilterScreen(props) {
  const [fromDate, setFromDate] = useState(
    Moment(new Date()).format("DD/MM/yyyy")
  );
  const [toDate, setToDate] = useState(Moment(new Date()).format("DD/MM/yyyy"));

  const [surgeonItems, setSurgeonItems] = useState([
    { label: "Dr. Smith", value: "smith" },
    { label: "Dr. Jeff", value: "jeff" },
    { label: "Dr. Shariq", value: "shariq" },
  ]);

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <ITextView text="Filter Cases" style={styles.screenTitle} />
        <View
          style={[
            styles.rowStyleContainerStyle,
            {
              zIndex: 3000,
              marginVertical: RFValue(5),
              marginTop: RFValue(20),
            },
          ]}
        >
          <ITextView text="Surgeon Name:" style={styles.spinnerLabelStyle} />
          <ISpinner items={surgeonItems} setItems={setSurgeonItems} />
        </View>

        <View
          style={[
            styles.rowStyleContainerStyle,
            { zIndex: 2000, marginVertical: RFValue(5) },
          ]}
        >
          <ITextView text="Assigned To:" style={styles.spinnerLabelStyle} />
          <ISpinner items={surgeonItems} setItems={setSurgeonItems} />
        </View>

        <View
          style={[
            styles.rowStyleContainerStyle,
            { zIndex: 1000, marginVertical: RFValue(5) },
          ]}
        >
          <ITextView text="Sort Cases by:" style={styles.spinnerLabelStyle} />
          <ISpinner items={surgeonItems} setItems={setSurgeonItems} />
        </View>
        <ITextView
          text="Surgery Date:"
          style={{
            fontSize: RFValue(13),
            marginTop: RFValue(15),
            fontFamily: font.opensans_bold,
            textDecorationLine: "underline",
            color: Color.white,
          }}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              width: "50%",
              paddingVertical: RFValue(5),
            }}
          >
            <ITextView
              text="From:"
              style={{
                color: Color.white,
                fontFamily: font.opensans_bold,
                fontSize: RFValue(12),
              }}
            />
            <View style={styles.dateViewContainer}>
              <ModalDatePicker
                button={<Text style={styles.dateTextStyle}>{fromDate}</Text>}
                locale="en"
                onSelect={(date) => {
                  setFromDate(Moment(date).format("DD/MM/yyyy"));
                }}
                isHideOnSelect={true}
                initialDate={new Date()}
              />
              <FontAwsomeIcon
                name="calendar"
                fontSize={RFValue(15)}
                style={{ marginStart: RFValue(5) }}
              />
            </View>
          </View>
          <View
            style={{
              width: "50%",
              marginStart: RFValue(20),
              paddingVertical: RFValue(5),
            }}
          >
            <ITextView
              text="To:"
              style={{
                color: Color.white,
                fontFamily: font.opensans_bold,
                fontSize: RFValue(12),
              }}
            />
            <View style={styles.dateViewContainer}>
              <ModalDatePicker
                button={<Text style={styles.dateTextStyle}>{toDate}</Text>}
                locale="en"
                onSelect={(date) => {
                  setToDate(Moment(date).format("DD/MM/yyyy"));
                }}
                isHideOnSelect={true}
                initialDate={new Date()}
              />
              <FontAwsomeIcon
                name="calendar"
                fontSize={RFValue(15)}
                style={{ marginStart: RFValue(5) }}
              />
            </View>
          </View>
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <ICheckBox
            checkBoxText="Next 7 Days"
            checkBoxTintColor={Color.white}
          />

          <ICheckBox
            checkBoxText="Next 30 Days"
            checkBoxTintColor={Color.white}
          />
        </View>
        <ITextView
          text="Case Stage:"
          style={{
            fontSize: RFValue(13),
            marginTop: RFValue(15),
            fontFamily: font.opensans_bold,
            textDecorationLine: "underline",
            color: Color.white,
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View>
            <ICheckBox
              checkBoxText="Segmentation"
              checkBoxTintColor={Color.white}
            />
            <ICheckBox
              checkBoxText="Planning"
              checkBoxTintColor={Color.white}
            />
            <ICheckBox
              checkBoxText="Proposed"
              checkBoxTintColor={Color.white}
            />
            <ICheckBox checkBoxText="Design" checkBoxTintColor={Color.white} />
          </View>
          <View>
            <ICheckBox
              checkBoxText="QA Review"
              checkBoxTintColor={Color.white}
            />
            <ICheckBox
              checkBoxText="Production"
              checkBoxTintColor={Color.white}
            />
            <ICheckBox checkBoxText="Ready" checkBoxTintColor={Color.white} />
          </View>
        </View>
        <View
          style={[
            styles.rowStyleContainerStyle,
            { zIndex: 2000, marginVertical: RFValue(5) },
          ]}
        >
          <ITextView text="Assigned To:" style={styles.spinnerLabelStyle} />
          <ISpinner items={surgeonItems} setItems={setSurgeonItems} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <IButton
            text="Reset"
            buttonStyle={styles.buttonStyle}
            onPress={props.onReset}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <IButton
              text="Cancel"
              buttonStyle={styles.buttonStyle}
              onPress={props.onCancel}
            />

            <IButton
              text="Apply"
              buttonStyle={styles.buttonStyle}
              onPress={props.onApply}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.grey,
    paddingHorizontal: RFValue(20),
  },
  screenTitle: {
    marginTop: RFValue(20),
    fontFamily: font.opensans_bold,
    fontSize: RFValue(15),
    color: Color.white,
    textDecorationLine: "underline",
    alignSelf: "center",
  },
  rowParentStyle: {
    marginVertical: RFValue(10),
  },
  viewDivider: {
    width: "100%",
    borderColor: Color.grey,
    borderWidth: 0.5,
  },
  rowStyleContainerStyle: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  spinnerLabelStyle: {
    width: "60%",
    fontSize: RFValue(13),
    color: Color.white,
    fontFamily: font.opensans_bold,
  },
  dateTextStyle: {
    backgroundColor: Color.white,
    color: Color.black,
    padding: RFValue(2),
    width: RFValue(100),
    fontFamily: font.opensans_medium,
    fontSize: RFValue(12),
    textAlign: "center",
  },
  dateViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: RFValue(5),
  },
  buttonStyle: {
    borderRadius: RFValue(5),
    marginHorizontal: RFValue(5),
    paddingVertical: RFValue(5),
    marginVertical: RFValue(10),
  },
});

export default FilterScreen;
