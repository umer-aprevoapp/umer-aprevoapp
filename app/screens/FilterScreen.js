import React from "react";
import { StyleSheet, Text, View } from "react-native";

function FilterScreen(props) {
  return (
    <View styles={styles.screen}>
      <Text>The Filter Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterScreen;
