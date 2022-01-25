import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Color from "../../assets/colors/Color";
import Checkbox from "expo-checkbox";
import { RFValue } from "react-native-responsive-fontsize";
import font from "../../assets/fonts/font";

const ICheckBox = ({
  checkBoxTintColor = undefined,
  colorTextBox = Color.primary,
  checkBoxText = "",
}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.checkboxContainer}>
      <Checkbox
        value={toggleCheckBox}
        onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
        color={toggleCheckBox ? colorTextBox : checkBoxTintColor}
      />
      <Text style={styles.checkBoxLabel}>{checkBoxText}</Text>
    </View>
  );
};

export default ICheckBox;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBoxLabel: {
    margin: RFValue(5),
    fontFamily: font.opensans_bold,
    color: Color.white,
  },
});
