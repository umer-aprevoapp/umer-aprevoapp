import React, { useRef, useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../assets/colors/Color";
import font from "../../assets/fonts/font";

import IonIcons from "./IonIcons";
import FontAwsomeIcon from "./FontAwsomeIcon";

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import ITextView from "./ITextView";
import BackNavigatorIcon from "./BackNavigatorIcon";

function IHeader({
  headerTitle,
  filterIcon = "filter",
  showInputField = true,
  showAddIcon = true,
  filterIconSize = RFValue(20),
  isMenuButton = true,
  isProfileIcon = true,
  navigation,
  onFilterIconPressed,
}) {
  return (
    <View style={{ overflow: "hidden", paddingBottom: 5 }}>
      <View style={styles.mainContainer}>
        <View style={styles.itemsContainer}>
          <Text style={styles.logoText}>aprevo 2.0</Text>

          {showInputField ? (
            <Text style={styles.headerTitleStyle}>{headerTitle}</Text>
          ) : null}

          <View style={styles.iconsContainer}>
            {showAddIcon ? (
              <FontAwsomeIcon
                name="plus-square"
                style={{ marginHorizontal: RFValue(12) }}
                onPress={() => {
                  navigation.navigate("AddNewCase");
                }}
              />
            ) : null}
            {isProfileIcon ? (
              <FontAwsomeIcon
                name="user"
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              />
            ) : null}
          </View>
        </View>

        <View style={[styles.itemsContainer, { marginTop: RFValue(10) }]}>
          {isMenuButton ? (
            <IonIcons
              name="menu"
              onIconClicked={() => navigation.toggleDrawer()}
            />
          ) : (
            <BackNavigatorIcon navigation={navigation} />
          )}

          {showInputField ? (
            <View style={styles.inputContainerStyle}>
              <FontAwsomeIcon
                fontSize={RFValue(15)}
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
          ) : (
            <Text style={[styles.headerTitleStyle, {}]}>{headerTitle}</Text>
          )}
          <FontAwsomeIcon
            name={filterIcon}
            fontSize={filterIconSize}
            onPress={onFilterIconPressed}
          />
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
