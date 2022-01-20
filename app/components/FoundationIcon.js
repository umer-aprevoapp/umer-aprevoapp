import React from "react";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Foundation";
import Color from "../../assets/colors/Color";

function FoundationIcon({
  name,
  fontSize = 25,
  style,
  onIconClicked,
  color = Color.black,
}) {
  return (
    <Icon
      style={{ ...styles.iconStyle, ...style }}
      name={name}
      color={color}
      size={fontSize}
      onPress={onIconClicked}
    />
  );
}
const styles = StyleSheet.create({
  iconStyle: {},
});
export default FoundationIcon;
