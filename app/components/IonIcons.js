import React from "react";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Color from "../../assets/colors/Color";

function IonIcons({
  style,
  color = Color.black,
  onIconClicked,
  fontSize = 30,
  name,
}) {
  return (
    <Ionicons
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
export default IonIcons;
