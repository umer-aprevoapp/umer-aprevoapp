import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../assets/colors/Color";
import { DROPDOWN_DIRECTION, GET_DROPDOWN_DIRECTION } from "../../assets";

const ISpinner = (props) => {
  const [direction, setDirection] = useState(
    GET_DROPDOWN_DIRECTION(DROPDOWN_DIRECTION.DEFAULT)
  );

  // approve specialist dropdown

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <DropDownPicker
      style={styles.dropDownStyle}
      open={isOpen}
      value={value}
      items={props.items}
      textStyle={{
        fontSize: RFValue(12),
      }}
      labelStyle={{
        fontWeight: "bold",
      }}
      setOpen={setIsOpen}
      setValue={setValue}
      dropDownDirection={direction}
      setItems={props.setItems}
      onSelectItem={(item) => {
        console.log(item);
        props.onSelectItem;
      }}
      onChangeValue={(value) => {
        console.log(value);
        props.onChangeValue;
      }}
    />
  );
};

export default ISpinner;

const styles = StyleSheet.create({
  dropDownStyle: {
    width: "40%",
    height: RFValue(25),
  },
});
