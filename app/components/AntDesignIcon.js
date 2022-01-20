import React from "react";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AntDesign from "react-native-vector-icons/AntDesign";
import Color from "../../assets/colors/Color";
function AntDesignIcon({
  color = Color.black,
  name,
  style,
  onIconClicked,
  fontSize = RFValue(30),
}) {
  return (
    <AntDesign
      style={{ ...styles.iconStyle, ...style }}
      name={name}
      color={color}
      size={fontSize}
      onPress={onIconClicked}
    />
  );
}

const styles = StyleSheet.create({ iconStyle: {} });

export default AntDesignIcon;
