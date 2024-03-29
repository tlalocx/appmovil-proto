// MainNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen.js"; // Update the path as needed
import Tabs from "./Tabs"; // Update the path as needed

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="MainTabs" component={Tabs} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
