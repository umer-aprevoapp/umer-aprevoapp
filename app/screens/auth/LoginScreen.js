import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import font from "../../../assets/fonts/font";
import IButton from "../../components/IButton";
import ITextInput from "../../components/ITextInput";
import PlaceHolderText from "../../components/PlaceHolderText";

const LoginScreen = (props) => {
  const goToCaseListScreen = () => {
    props.navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.text}>aprevo 2.0</Text>
        <PlaceHolderText placeholder="Email" />
        <ITextInput placeholder="Email" />
        <PlaceHolderText placeholder="Password" />
        <ITextInput isPasswordField={true} placeholder="Password" />

        <IButton
          text="Login"
          buttonStyle={{ marginVertical: RFValue(30) }}
          style={{ textTransform: "uppercase" }}
          onPress={goToCaseListScreen}
        />
      </View>
    </View>
  );
};
LoginScreen.navigationOptions = {
  headerTitle: "Umer",
};
const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  content: {
    width: "80%",
  },
  text: {
    fontSize: RFValue(20),
    fontFamily: font.opensans_bold,
    fontSize: RFValue(30),
    marginVertical: RFValue(10),
    textAlign: "center",
  },
});

export default LoginScreen;
