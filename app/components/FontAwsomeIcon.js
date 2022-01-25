import React from "react";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/FontAwesome";
import Color from "../../assets/colors/Color";

function FontAwsomeIcon({
  name,
  fontSize = RFValue(25),
  style,
  onPress,
  color = Color.black,
}) {
  return (
    <Icon
      style={{ ...styles.iconStyle, ...style }}
      name={name}
      color={color}
      size={fontSize}
      onPress={onPress}
    />
  );
}
const styles = StyleSheet.create({
  iconStyle: {},
});
export default FontAwsomeIcon;
