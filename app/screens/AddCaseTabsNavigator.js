import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import InterBodyTabView from "./add_case_tabs/InterBodyTabView";
import IHeader from "../components/IHeader";
import Color from "../../assets/colors/Color";
import { SCREEN_NAMES } from "../../assets";
import PatientTabView from "./add_case_tabs/PatientTabView";
import CaseDetailsTabView from "./add_case_tabs/CaseDetailsTabView";

const Tab = createMaterialTopTabNavigator();

const AddCaseTabsNavigator = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <IHeader
        showAddIcon={false}
        isMenuButton={false}
        navigation={props.navigation}
        showInputField={false}
        headerTitle={SCREEN_NAMES.ADD_NEW_CASE_SCREEN}
        isProfileIcon={false}
      />
      <Tab.Navigator
        initialRouteName={SCREEN_NAMES.CASE_DETAILS}
        screenOptions={{
          swipeEnabled: false,
          tabBarActiveTintColor: Color.black,
          tabBarLabelStyle: { fontSize: RFValue(12), color: Color.black },
          tabBarStyle: { backgroundColor: Color.white },
        }}
      >
        <Tab.Screen
          name={SCREEN_NAMES.CASE_DETAILS}
          component={CaseDetailsTabView}
          options={{ tabBarLabel: SCREEN_NAMES.CASE_DETAILS }}
        />
        <Tab.Screen
          name={SCREEN_NAMES.INTER_BODY}
          component={InterBodyTabView}
          options={{ tabBarLabel: "Interbody" }}
        />
        <Tab.Screen
          name={SCREEN_NAMES.PATIENT_TAB_SCREEN}
          component={PatientTabView}
          options={{ tabBarLabel: SCREEN_NAMES.PATIENT_TAB_SCREEN }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default AddCaseTabsNavigator;

const styles = StyleSheet.create({});
