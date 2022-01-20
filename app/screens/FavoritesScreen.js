import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Color from "../../assets/colors/Color";
import IHeader from "../components/IHeader";

function FavoritesScreen(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <View>
        <IHeader
          headerTitle="Case List"
          onIconClicked={() => props.navigation.toggleDrawer()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
