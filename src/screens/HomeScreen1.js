import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a nuestra App</Text>
      <Image
        style={styles.image}
        source={{ uri: "https://source.unsplash.com/random/400x200?nature" }}
      />
      <Text style={styles.description}>
        Explora las posibilidades de los componentes de React Native.
      </Text>
      <Button
        title="Ir a la pantalla 2"
        onPress={() => navigation.navigate("Home2")}
        color="#007BFF" // Customize button color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 10, // Rounded corners for the image
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default HomeScreen1;
