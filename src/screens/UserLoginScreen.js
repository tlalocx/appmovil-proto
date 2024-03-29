import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase"; // Assuming you've refactored firebase initialization to its own file

const backgroundImageUrl = "https://source.unsplash.com/random/400x800?nature";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const auth = getAuth(app);

  const navigateToWelcomeScreen = (userEmail) => {
    navigation.navigate("UserWelcome", { email: userEmail });
  };

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert("Éxito", "¡Cuenta creada!", [
          { text: "OK", onPress: () => navigateToWelcomeScreen(email) },
        ]);
      })
      .catch((error) => {
        let errorMessage = "Se produjo un error al crear la cuenta.";
        if (error.code === "auth/weak-password") {
          errorMessage = "La contraseña es demasiado débil.";
        } else if (error.code === "auth/email-already-in-use") {
          errorMessage = "El correo electrónico ya está en uso.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "El correo electrónico no es válido.";
        }
        Alert.alert("Error", errorMessage);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert("Éxito", "¡Inicio de sesión exitoso!", [
          { text: "OK", onPress: () => navigateToWelcomeScreen(email) },
        ]);
      })
      .catch((error) => {
        let errorMessage = "Se produjo un error al iniciar sesión.";
        if (error.code === "auth/invalid-credential") {
          errorMessage = "Nombre de usuario o contraseña inválidos.";
        }
        Alert.alert("Error", errorMessage);
      });
  };

  return (
    <ImageBackground
      source={{ uri: backgroundImageUrl }}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <BlurView intensity={90} style={styles.blurContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={setEmail}
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="black"
            />
            <TextInput
              onChangeText={setPassword}
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="black"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
            <Text style={styles.buttonText}>Crear cuenta</Text>
          </TouchableOpacity>
        </BlurView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blurContainer: {
    width: "80%",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "#ffffffbb",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
