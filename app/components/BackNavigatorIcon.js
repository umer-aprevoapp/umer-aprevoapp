import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwsomeIcon from "./FontAwsomeIcon";
import ITextView from "./ITextView";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../assets/colors/Color";

const BackNavigatorIcon = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <FontAwsomeIcon
          color={Color.primary}
          name="angle-left"
          fontSize={RFValue(25)}
          onIconClicked={() => {
            navigation.goBack();
          }}
        />
        <ITextView
          text="Back"
          style={{
            color: Color.primary,
            fontSize: RFValue(15),
            textAlign: "right",
            marginStart: RFValue(5),
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BackNavigatorIcon;

const styles = StyleSheet.create({});
