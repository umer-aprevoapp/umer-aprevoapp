import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Color from "../../assets/colors/Color";
import IHeader from "../components/IHeader";

function AboutScreen(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <View>
        <IHeader
          headerTitle="About"
          onIconClicked={() => props.navigation.toggleDrawer()}
        />
      </View>
    </SafeAreaView>
  );
}

export default AboutScreen;
