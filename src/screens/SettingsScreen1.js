import React from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen1 = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ImageBackground
      source={{ uri: "https://source.unsplash.com/random/400x800?nature" }}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.header}>Configuración</Text>
          <View style={styles.settingOption}>
            <Text style={styles.optionText}>Modo Oscuro</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("InfoScreen")}
          >
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="#FFF"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Ir a Info</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("Configuración guardada!")}
          >
            <Ionicons
              name="save-outline"
              size={24}
              color="#FFF"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Guardar Configuración</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Enhances readability
    alignItems: "center", // Centers content horizontally
    paddingVertical: 50,
  },
  container: {
    width: "80%", // Sets the width for the container
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
    borderRadius: 20, // Rounded corners for the container
    padding: 20,
    alignItems: "center", // Centers content
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333", // Dark text for better contrast on light background
    marginVertical: 20,
  },
  settingOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%", // Full width
    marginBottom: 30, // Adds spacing before the next button
  },
  optionText: {
    fontSize: 18,
    color: "#333",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0066CC", // A modern blue shade
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25, // More rounded corners for buttons
    marginTop: 10,
    width: "100%", // Full width
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 8, // Space between icon and text
  },
  buttonIcon: {
    // No changes required, styles are applied inline for icons
  },
});
export default SettingsScreen1;
