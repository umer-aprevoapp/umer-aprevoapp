import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../assets/colors/Color";
import ITextView from "../../components/ITextView";
import ISpinner from "../../components/ISpinner";
import font from "../../../assets/fonts/font";
import INextButton from "../../components/INextButton";
import { SCREEN_NAMES } from "../../../assets";
import IForwardButton from "../../components/IForwardButton";
import RadioGroup from "../../components/RadioGroup";

const InterBodyTabView = (props) => {
  const [surgeonItems, setSurgeonItems] = useState([
    { label: "Dr. Smith", value: "smith" },
    { label: "Dr. Jeff", value: "jeff" },
    { label: "Dr. Shariq", value: "shariq" },
  ]);
  // const [checked, setChecked] = useState("first");

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: RFValue(20),
        marginVertical: RFValue(20),
      }}
    >
      <ITextView style={styles.headerTitle} text="Interbody Levels" />
      <View
        style={[
          styles.rowParentStyle,
          { flexDirection: "column", zIndex: 5000, marginTop: RFValue(20) },
        ]}
      >
        <View style={styles.rowStyleContainerStyle}>
          <ITextView
            text="L1/L2:"
            style={{ width: "60%", fontSize: RFValue(13) }}
          />
          <ISpinner items={surgeonItems} setItems={setSurgeonItems} />
        </View>
        <View style={{ ...styles.viewDivider }}></View>
      </View>
      <View
        style={[
          styles.rowParentStyle,
          { flexDirection: "column", zIndex: 4000 },
        ]}
      >
        <View style={styles.rowStyleContainerStyle}>
          <ITextView
            text="L2/L3:"
            style={{ width: "60%", fontSize: RFValue(13) }}
          />
          <ISpinner items={surgeonItems} setItems={setSurgeonItems} />
        </View>
        <View style={{ ...styles.viewDivider }}></View>
      </View>
      <View
        style={[
          styles.rowParentStyle,
          { flexDirection: "column", zIndex: 3000 },
        ]}
      >
        <View style={styles.rowStyleContainerStyle}>
          <ITextView
            text="L3/L4:"
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
            text="L4/L5:"
            style={{ width: "60%", fontSize: RFValue(13) }}
          />
          <ISpinner items={surgeonItems} setItems={setSurgeonItems} />
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
            text="L5/L1:"
            style={{ width: "60%", fontSize: RFValue(13) }}
          />
          <ISpinner items={surgeonItems} setItems={setSurgeonItems} />
        </View>
        <View style={{ ...styles.viewDivider }}></View>
      </View>

      <View style={{ marginVertical: RFValue(30) }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <ITextView
            text="Include Rod Templates"
            style={{ width: "50%", fontSize: RFValue(13), textAlign: "left" }}
          />
          <RadioGroup />
        </View>

        <View style={{ ...styles.viewDivider }}></View>
      </View>

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
          style={styles.nextButtonStyle}
          goToNextForm={() => {
            props.navigation.navigate(SCREEN_NAMES.PATIENT_TAB_SCREEN);
          }}
        />
      </View>
    </View>
  );
};

export default InterBodyTabView;

const styles = StyleSheet.create({
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
  viewDivider: {
    width: "100%",
    borderColor: Color.grey,
    borderWidth: 0.5,
  },
  headerTitle: {
    fontFamily: font.opensans_bold,
    fontSize: RFValue(18),
    textDecorationLine: "underline",
  },
});
