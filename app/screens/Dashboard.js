import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CaseListScreen from "../screens/CaseListScreen";
import { DrawerContent } from "../drawer/DrawerContent";
import SettingsScreen from "./SettingsScreen";
import ComplianceScreen from "./ComplianceScreen";
import AboutScreen from "./AboutScreen";
import ReportsScreen from "./ReportsScreen";
const { width } = Dimensions.get("screen");

const Drawer = createDrawerNavigator();

const Dashboard = (props) => {
  const isLargeScreen = width >= 768;

  return (
    <Drawer.Navigator
      initialRouteName="CaseList"
      drawerStyle={isLargeScreen ? null : { width: "80%" }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="CaseList"
        component={CaseListScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Compliance"
        component={ComplianceScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Reports"
        component={ReportsScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default Dashboard;
