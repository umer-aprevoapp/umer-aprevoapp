import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Color from "../../assets/colors/Color";
import IHeader from "../components/IHeader";

function ReportsScreen(props) {
  return (
    <View>
      <IHeader headerTitle="Reports" navigation={props.navigation} />
    </View>
  );
}

export default ReportsScreen;
