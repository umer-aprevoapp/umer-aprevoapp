import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogoScreen from "./app/screens/LogoScreen";
import Dashboard from "./app/screens/Dashboard";

import LoginScreen from "./app/screens/auth/LoginScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName="Logo">
          <Stack.Screen
            options={{ headerShown: false, title: null }}
            name="Logo"
            component={LogoScreen}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
