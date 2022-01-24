import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";
import { DROPDOWN_DIRECTION, GET_DROPDOWN_DIRECTION } from "../../../assets";
import ITextView from "../../components/ITextView";
import Color from "../../../assets/colors/Color";
import { ModalDatePicker } from "react-native-material-date-picker";
import Moment from "moment";
import FontAwsomeIcon from "../../components/FontAwsomeIcon";
import CheckBox from "@react-native-community/checkbox";
import font from "../../../assets/fonts/font";
const CaseDetailsRoute = () => {
  const [direction, setDirection] = useState(
    GET_DROPDOWN_DIRECTION(DROPDOWN_DIRECTION.DEFAULT)
  );
  const [receivedDate, setReceivedDate] = useState(
    Moment(new Date()).format("DD/MM/yyyy")
  );
  const [surgeryDate, setSurgeryDate] = useState(
    Moment(new Date()).format("DD/MM/yyyy")
  );

  // approve specialist dropdown
  const [isSpecialistOpen, setIsSpecialistOpen] = useState(false);
  const [specialistValue, setSpecialistValue] = useState(null);
  const [specialistItems, setSpecialistItems] = useState([
    { label: "Shariq Hussain", value: "shariq_hussain" },
    { label: "Khurram Nisar", value: "khurram_nisar" },
    { label: "Umer Abidin", value: "umer_abidin" },
    { label: "Jeff", value: "jeff" },
  ]);

  //surgeon dropdown
  const [isSurgeonOpen, setIsSurgeonOpenn] = useState(false);
  const [surgeonValue, setSurgeonValue] = useState(null);
  const [surgeonItems, setSurgeonItems] = useState([
    { label: "Dr. Smith", value: "smith" },
    { label: "Dr. Jeff", value: "jeff" },
    { label: "Dr. Shariq", value: "shariq" },
  ]);

  // assigned to dropdown
  const [isAssignedOpen, setIsAssignedOpen] = useState(false);
  const [assignedToValue, setAssignedToValue] = useState(null);
  const [assignedToItems, setAssignedToItems] = useState([
    { label: "Shariq Hussain", value: "shariq_hussain" },
    { label: "Khurram Nisar", value: "khurram_nisar" },
    { label: "Umer Abidin", value: "umer_abidin" },
    { label: "Jeff", value: "jeff" },
  ]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginHorizontal: RFValue(20),
          marginVertical: RFValue(10),
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: RFValue(5),
          }}
        >
          <ITextView
            text="Received Date*"
            style={{
              width: "60%",
              fontSize: RFValue(13),
            }}
          />

          <View style={styles.dateViewContainer}>
            <ModalDatePicker
              button={<Text style={styles.dateTextStyle}>{receivedDate}</Text>}
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

      <View
        style={{
          marginHorizontal: RFValue(20),
          marginVertical: RFValue(10),
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: RFValue(5),
          }}
        >
          <ITextView
            text="Surgery Date"
            style={{
              width: "60%",
              fontSize: RFValue(13),
            }}
          />

          <View style={styles.dateViewContainer}>
            <ModalDatePicker
              button={<Text style={styles.dateTextStyle}>{surgeryDate}</Text>}
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
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Tentative</Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          marginHorizontal: RFValue(20),
          marginVertical: RFValue(10),
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <ITextView
            text="Surgeon Name"
            style={{ width: "60%", fontSize: RFValue(13) }}
          />
          <DropDownPicker
            style={{ width: "40%", height: RFValue(25) }}
            open={isSurgeonOpen}
            value={surgeonValue}
            items={surgeonItems}
            setOpen={setIsSurgeonOpenn}
            setValue={setSurgeonValue}
            dropDownDirection={direction}
            setItems={setSurgeonItems}
          />
        </View>
        <View style={{ ...styles.viewDivider }}></View>
      </View>
      <View
        style={{
          flexDirection: "column",
          marginHorizontal: RFValue(20),
          marginVertical: RFValue(10),
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <ITextView
            text="Assigned To"
            style={{ width: "60%", fontSize: RFValue(13) }}
          />
          <DropDownPicker
            style={{ width: "40%", height: RFValue(25) }}
            open={isAssignedOpen}
            value={assignedToValue}
            items={assignedToItems}
            setOpen={setIsAssignedOpen}
            setValue={setAssignedToValue}
            dropDownDirection={direction}
            setItems={setAssignedToItems}
          />
        </View>
        <View style={{ ...styles.viewDivider }}></View>
      </View>
      <View
        style={{
          flexDirection: "column",
          marginHorizontal: RFValue(20),
          marginVertical: RFValue(10),
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <ITextView
            text="aprevo Specialist:"
            style={{ width: "60%", fontSize: RFValue(13) }}
          />
          <DropDownPicker
            style={{ width: "40%", height: RFValue(25) }}
            open={isSpecialistOpen}
            value={specialistValue}
            items={specialistItems}
            setOpen={setIsSpecialistOpen}
            setValue={setSpecialistValue}
            dropDownDirection={direction}
            setItems={setSpecialistItems}
          />
        </View>
        <View style={{ ...styles.viewDivider }}></View>
      </View>
    </View>
  );
};

export default CaseDetailsRoute;

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
    marginEnd: RFValue(30),
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: RFValue(5),
    fontFamily: font.opensans_medium,
  },
});
