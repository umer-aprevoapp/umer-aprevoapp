import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { RadioButton } from "react-native-paper";

const RadioGroup = ({ yes = "Yes", no = "No" }) => {
  const [value, setValue] = useState("first");

  return (
    <RadioButton.Group
      onValueChange={(newValue) => setValue(newValue)}
      value={value}
    >
      <View
        style={{
          flexDirection: "row",
          width: "50%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <RadioButton value="first" />
          <Text>{yes}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginStart: RFValue(20),
          }}
        >
          <RadioButton value="second" />
          <Text>{no}</Text>
        </View>
      </View>
    </RadioButton.Group>
  );
};

export default RadioGroup;

const styles = StyleSheet.create({});
