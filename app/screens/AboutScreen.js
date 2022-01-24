import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import IHeader from "../components/IHeader";

function AboutScreen(props) {
  return (
    <View>
      <IHeader headerTitle="About" navigation={props.navigation} />
    </View>
  );
}

export default AboutScreen;
