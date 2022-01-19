import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CaseListScreen from "../screens/CaseListScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { DrawerContent } from "../drawer/DrawerContent";
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
        name="Favourite"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default Dashboard;
