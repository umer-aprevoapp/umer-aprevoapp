import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CategoriesScreen = ({ navigation }) => {
  console.log(navigation);

  const navigateToCatergoryMealsScreen = () => {
    navigation.navigate("CategoryMeal");
  };

  return (
    <View style={styles.screen}>
      <Text>The Category Screen</Text>
      <Button title="Go To Meals" onPress={navigateToCatergoryMealsScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoriesScreen;
