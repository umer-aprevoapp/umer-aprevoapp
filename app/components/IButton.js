import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../assets/colors/Color";
import font from "../../assets/fonts/font";

const IButton = (props) => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ ...styles.button, ...props.buttonStyle }}
        onPress={props.onPress}
      >
        <Text style={{ ...styles.text, ...props.style }}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.dodgerblue,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(10),
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    alignContent: "center",
    borderRadius: RFValue(3),
  },
  text: {
    fontFamily: font.opensans_bold,
    fontSize: RFValue(13),
    color: Color.white,
  },
});
export default IButton;
