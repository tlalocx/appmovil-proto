import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";

const WelcomeScreen = ({ route }) => {
  const { email } = route.params;

  return (
    <ImageBackground
      source={{ uri: "https://source.unsplash.com/featured/?nature,water" }} // You can change the URL to any image you prefer
      style={styles.backgroundImage}
    >
      <View style={styles.welcomeContainer}>
        <BlurView intensity={50} style={styles.blurContainer}>
          <Text style={styles.welcomeText}>Bienvenido!</Text>
          <Text style={styles.emailText}>Correo: {email}</Text>
        </BlurView>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  blurContainer: {
    borderRadius: 20,
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  emailText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});
