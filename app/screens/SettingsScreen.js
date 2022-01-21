import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Color from "../../assets/colors/Color";
import font from "../../assets/fonts/font";
import IHeader from "../components/IHeader";
import ITextView from "../components/ITextView";

function SettingsScreen(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <View>
        <IHeader
          headerTitle="Settings"
          showInputField={false}
          filterIcon="search"
          filterIconSize={RFValue(20)}
          showAddIcon={false}
          navigation={props.navigation}
        />
        <View
          style={{
            borderWidth: 1,
            borderColor: Color.black,
            borderRadius: RFValue(3),
            marginHorizontal: RFValue(20),
            marginTop: RFValue(50),
            flexDirection: "column",
            padding: RFValue(5),
          }}
        >
          <ITextView
            text="Notification Settings"
            style={{ fontSize: RFValue(15), fontFamily: font.opensans_bold }}
          />

          <View
            style={{
              width: "100%",
              marginTop: RFValue(10),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ITextView
              text="Turn on/off Email Notifications"
              style={{ fontSize: RFValue(13) }}
            />
            <Switch
              trackColor={{ false: "#767577", true: Color.test }}
              thumbColor={isEnabled ? "green" : "#f4f3f4"}
              ios_backgroundColor="green"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={{ ...styles.viewDivider }}></View>

          <View
            style={{
              width: "100%",
              marginTop: RFValue(10),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",

              marginBottom: RFValue(5),
            }}
          >
            <ITextView
              text="Turn on/off SMS Notifications"
              style={{ fontSize: RFValue(13) }}
            />
            <Switch
              trackColor={{ false: "#767577", true: Color.test }}
              thumbColor={isEnabled ? "green" : "#f4f3f4"}
              ios_backgroundColor="green"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        {/* Biometric Login Settings View */}
        <View
          style={{
            borderWidth: 1,
            borderColor: Color.black,
            borderRadius: RFValue(3),
            marginHorizontal: RFValue(20),
            marginTop: RFValue(50),
            flexDirection: "column",
            padding: RFValue(5),
          }}
        >
          <ITextView
            text="Biometric Login"
            style={{ fontSize: RFValue(15), fontFamily: font.opensans_bold }}
          />

          <View
            style={{
              width: "100%",
              marginTop: RFValue(10),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: RFValue(5),
            }}
          >
            <ITextView
              text="Turn on/off Fingerprint Login"
              style={{ fontSize: RFValue(13) }}
            />
            <Switch
              trackColor={{ false: "#767577", true: Color.test }}
              thumbColor={isEnabled ? "green" : "#f4f3f4"}
              ios_backgroundColor="green"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  viewDivider: {
    width: "100%",
    borderColor: Color.grey,
    borderWidth: 0.5,
    marginTop: RFValue(5),
  },
});
export default SettingsScreen;
