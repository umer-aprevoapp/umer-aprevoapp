import React from "react";
import { StyleSheet, Text, View } from "react-native";

function FavoritesScreen(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>This is a Favourite item screen</Text>
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
