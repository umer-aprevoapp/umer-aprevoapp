import React, { useRef, useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../assets/colors/Color";
import font from "../../assets/fonts/font";

import IonIcons from "./IonIcons";
import FontAwsomeIcon from "./FontAwsomeIcon";

import { TextInput } from "react-native-gesture-handler";

function IHeader(props) {
  console.log(props);
  return (
    <View style={{ overflow: "hidden", paddingBottom: 5 }}>
      <View style={styles.mainContainer}>
        <View style={styles.itemsContainer}>
          <Text style={styles.logoText}>aprevo 2.0</Text>
          <Text style={styles.headerTitleStyle}>{props.headerTitle}</Text>

          <View style={styles.iconsContainer}>
            <FontAwsomeIcon
              name="plus-square"
              style={{ marginHorizontal: RFValue(12) }}
            />
            <FontAwsomeIcon name="user" />
          </View>
        </View>

        <View style={[styles.itemsContainer, { marginTop: RFValue(10) }]}>
          <IonIcons name="menu" onIconClicked={props.onIconClicked} />

          <View style={styles.inputContainerStyle}>
            <FontAwsomeIcon
              fontSize={15}
              name="search"
              onPress={() => this.myTextInput.focus()}
            />
            <TextInput
              ref={(ref) => {
                this.myTextInput = ref;
              }}
              style={styles.textInputStyle}
              placeholder="Search with Case #, Surgeon, Patient"
            />
            <FontAwsomeIcon name="microphone" fontSize={15} />
          </View>

          <FontAwsomeIcon name="filter" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.white,
    width: "100%",
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(10),
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  itemsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputContainerStyle: {
    width: "80%",
    borderColor: Color.grey,
    borderWidth: 1,
    borderRadius: RFValue(20),
    padding: RFValue(8),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInputStyle: {
    width: "85%",
    borderRadius: RFValue(20),
  },
  logoText: {
    fontFamily: font.opensans_bold,
    fontSize: RFValue(12),
    color: Color.black,
  },
  headerTitleStyle: {
    textAlign: "center",
    fontFamily: font.opensans_bold,
    fontSize: RFValue(18),
  },
  iconsContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
export default IHeader;
