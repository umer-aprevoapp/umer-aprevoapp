import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../assets/colors/Color";
import font from "../../assets/fonts/font";

const ITextInput = ({ isPasswordField = false, style, placeholder }) => {
  return (
    <TextInput
      secureTextEntry={isPasswordField}
      style={{ ...styles.input, ...style }}
      placeholder={placeholder}
      placeholderTextColor={Color.grey}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: Color.grey,
    borderWidth: 1,
    borderRadius: RFValue(5),
    padding: RFValue(8),
    fontSize: RFValue(12),
    fontFamily: font.opensans_medium,
  },
});

export default ITextInput;
