import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import font from "../../assets/fonts/font";

import IButton from "../components/IButton";

function LogoScreen(props) {
  const navigateToLoginScreen = () => {
    props.navigation.navigate("Login");
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Aprevo 2.0</Text>
      <IButton
        text="start"
        onPress={navigateToLoginScreen}
        style={{ textTransform: "uppercase" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: RFValue(20),
    fontFamily: font.opensans_bold,
    marginVertical: RFValue(10),
  },
});

export default LogoScreen;
