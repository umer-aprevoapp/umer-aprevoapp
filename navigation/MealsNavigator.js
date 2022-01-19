import { createSwitchNavigator } from "react-navigation";
import CategoriesScreen from "../app/screens/CategoriesScreen";
import CategoryMealScreen from "../app/screens/CategoryMealScreen";
import MealDetailsScreen from "../app/screens/MealDetailsScreen";

const Stack = createSwitchNavigator();
const MealNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeal" component={CategoryMealScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
};

export default createAppContainer(MealNavigator);
