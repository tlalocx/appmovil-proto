import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Device from "expo-device";

const InfoScreen = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <ImageBackground
      source={{ uri: "https://source.unsplash.com/featured/?nature" }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={{ flex: 1 }}>
          {location && (
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                title="Current Location"
                description="You are here"
              />
            </MapView>
          )}
          <View style={styles.infoContainer}>
            <ScrollView>
              <Text style={styles.welcomeText}>Device Information:</Text>
              <Text>Plataforma: {Device.brand}</Text>
              <Text>Sistema Operativo: {Device.osName}</Text>
              <Text>Versión S.O.: {Device.osVersion}</Text>
              <Text>Procesador: {Device.supportedCpuArchitectures}</Text>
              <Text>Versión del Sistema: {Device.brand}</Text>
              <Text>Nombre del Dispositivo: {Device.deviceName}</Text>
              <Text>Modelo del Dispositivo: {Device.modelName}</Text>
              <Text>Compilacion del Dispositivo: {Device.osBuildId}</Text>
              <Text>
                Memoria RAM Total (MB): {Device.totalMemory / (1024 * 1024)}
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds a semi-transparent overlay to enhance text readability
  },
  infoContainer: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Light background for text for better readability
    borderRadius: 10, // Rounded corners
  },
  welcomeText: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: "center",
  },
  // Add other styles as needed
});

export default InfoScreen;
