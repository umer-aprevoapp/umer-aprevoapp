import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../assets/colors/Color";
import font from "../../assets/fonts/font";

const FloatingTextInput = (props) => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      style={{ ...styles.textInputStyle, ...props.style }}
      value={text}
      mode="outlined"
      label={props.label}
      onChangeText={(text) => {
        setText(text);
        props.onChangeText;
      }}
      placeholder={props.placeholder}
      outlineColor={Color.black}
      activeOutlineColor={Color.black}
      multiline={false}
    />
  );
};

export default FloatingTextInput;

const styles = StyleSheet.create({
  textInputStyle: {
    height: RFValue(35),
    fontSize: RFValue(12),
  },
});
