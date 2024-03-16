import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen1 from "../screens/SettingsScreen1";
import InfoScreen from "../screens/InfoScreen";

const SettingsStackScreen = () => {
  const SettingsStack = createNativeStackNavigator();
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen1} />
      <SettingsStack.Screen name="InfoScreen" component={InfoScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;
