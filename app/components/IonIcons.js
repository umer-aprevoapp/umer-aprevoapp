import React from "react";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Color from "../../assets/colors/Color";

function IonIcons(props) {
  return (
    <Ionicons
      style={{ ...styles.iconStyle, ...props.style }}
      name={props.name}
      color={Color.black}
      size={30}
      onPress={props.onIconClicked}
    />
  );
}
const styles = StyleSheet.create({
  iconStyle: {},
});
export default IonIcons;
