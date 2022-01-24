import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CaseDetailsRoute from "./add_case_tabs/CaseDetailsRoute";
import InterBodyRoute from "./add_case_tabs/InterBodyRoute";
import PatientRoute from "./add_case_tabs/PatientRoute";
import IHeader from "../components/IHeader";
import Color from "../../assets/colors/Color";

const Tab = createMaterialTopTabNavigator();

const AddCaseTabsNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <IHeader />
      <Tab.Navigator
        initialRouteName="Case Details"
        screenOptions={{
          tabBarActiveTintColor: Color.black,
          tabBarLabelStyle: { fontSize: 12, color: Color.black },
          tabBarStyle: { backgroundColor: Color.white },
        }}
      >
        <Tab.Screen
          name="Case Details"
          component={CaseDetailsRoute}
          options={{ tabBarLabel: "Case Details" }}
        />
        <Tab.Screen
          name="Inter Body"
          component={InterBodyRoute}
          options={{ tabBarLabel: "Interbody" }}
        />
        <Tab.Screen
          name="Profile"
          component={PatientRoute}
          options={{ tabBarLabel: "Profile" }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default AddCaseTabsNavigator;

const styles = StyleSheet.create({});
