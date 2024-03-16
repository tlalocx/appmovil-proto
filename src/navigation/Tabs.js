import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "../stacks/HomeStackScreen";
import SettingsStackScreen from "../stacks/SettingsStackScreen";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";

const TabBarIcon = ({ name, color }) => {
  let iconName;
  let IconComponent;

  switch (name) {
    case "Home":
      IconComponent = Entypo;
      iconName = "home";
      break;
    case "User":
      IconComponent = FontAwesome;
      iconName = "user";
      break;
    case "Settings":
      IconComponent = Ionicons;
      iconName = "settings";
      break;
    default:
      IconComponent = Entypo;
      iconName = "home";
  }

  return (
    <View style={styles.iconContainer}>
      <IconComponent name={iconName} size={24} color={color} />
    </View>
  );
};

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => (
          <TabBarIcon name={route.name} color={focused ? "#16247d" : "#111"} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tabs;
