import CategoriesScreen from "./app/screens/CategoriesScreen";
import CategoryMealScreen from "./app/screens/CategoryMealScreen";
import MealDetailsScreen from "./app/screens/MealDetailsScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogoScreen from "./app/screens/LogoScreen";
import Dashboard from "./app/screens/Dashboard";

import LoginScreen from "./app/screens/auth/LoginScreen";
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
            name="Categories"
            // options={{ title: "" }}
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="CategoryMeal"
            // options={{ title: "" }}
            component={CategoryMealScreen}
          />
          <Stack.Screen
            name="MealDetails"
            // options={{ title: "" }}
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}
