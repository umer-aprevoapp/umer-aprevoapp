import React from "react";
import { View } from "react-native";
import Color from "../../assets/colors/Color";
import IHeader from "../components/IHeader";

function ComplianceScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <IHeader headerTitle="Compliance" navigation={props.navigation} />
    </View>
  );
}

export default ComplianceScreen;
