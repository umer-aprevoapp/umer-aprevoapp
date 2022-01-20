import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Color from "../../assets/colors/Color";
import IHeader from "../components/IHeader";

function SettingsScreen(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <View>
        <IHeader
          headerTitle="Settings"
          onIconClicked={() => props.navigation.toggleDrawer()}
        />
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
