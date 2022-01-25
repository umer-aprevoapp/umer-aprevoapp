import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import FontAwsomeIcon from "./FontAwsomeIcon";
import { RFValue } from "react-native-responsive-fontsize";
import ITextView from "./ITextView";
import { TouchableOpacity } from "react-native-gesture-handler";
import font from "../../assets/fonts/font";
import Color from "../../assets/colors/Color";

const IForwardButton = ({ style, goToNextForm, label = "Next" }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{ ...style }}
      onPress={goToNextForm}
    >
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwsomeIcon
          fontSize={RFValue(20)}
          name="angle-left"
          color={Color.white}
          style={{ marginHorizontal: RFValue(5) }}
        />
        <ITextView
          text={label}
          style={{
            fontFamily: font.opensans_bold,
            color: Color.white,
            fontSize: RFValue(13),
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default IForwardButton;
