import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen1 from "../screens/HomeScreen1";
import HomeScreen2 from "../screens/HomeScreen2";

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home1"
        component={HomeScreen1}
        options={{ title: "Welcome Home" }} // Example to set a title
      />
      <HomeStack.Screen
        name="Home2"
        component={HomeScreen2}
        options={{ headerShown: false }} // Example to hide the header
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
