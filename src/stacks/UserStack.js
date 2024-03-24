import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen1 from "../screens/HomeScreen1";
import HomeScreen2 from "../screens/HomeScreen2";
import UserLoginScreen from "../screens/UserLoginScreen";
import UserWelcomeScreen from "../screens/UserWelcomeScreen";

const UserStack = () => {
  const UserStack = createNativeStackNavigator();
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="UserLogin"
        component={UserLoginScreen}
        options={{ headerShown: false }}
      />
      <UserStack.Screen
        name="UserWelcome"
        component={UserWelcomeScreen}
        options={{ headerShown: false }}
      />
    </UserStack.Navigator>
  );
};

export default UserStack;
