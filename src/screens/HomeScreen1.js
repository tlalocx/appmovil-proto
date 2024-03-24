import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/FontAwesome";
import * as WebBrowser from "expo-web-browser"; // Import Expo WebBrowser

const HomeScreen1 = () => {
  const navigation = useNavigation();
  const handlePress = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };
  // State for carousel items
  const [carouselItems, setCarouselItems] = useState([
    {
      title: "",
      uri: "https://source.unsplash.com/random/400x200?nature",
    },
    {
      title: "",
      uri: "https://source.unsplash.com/random/400x200?water",
    },
    {
      title: "",
      uri: "https://source.unsplash.com/random/400x200?education",
    },
    // Initial carousel items
  ]);

  const updateCarouselItems = () => {
    setCarouselItems([
      {
        title: "",
        uri: `https://source.unsplash.com/random/400x200?nature&${Math.random()}`,
      },
      {
        title: "",
        uri: `https://source.unsplash.com/random/400x200?water&${Math.random()}`,
      },
      {
        title: "",
        uri: `https://source.unsplash.com/random/400x200?education&${Math.random()}`,
      },
      // Generate new items with unique URIs to force refresh
    ]);
  };

  // Render carousel item
  const renderCarouselItem = ({ item, index }) => (
    <View style={styles.carouselItem}>
      <Image style={styles.carouselImage} source={{ uri: item.uri }} />
      <Text style={styles.carouselText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Galleria del dia</Text>
      <View style={styles.carouselContainer}>
        <Carousel
          data={carouselItems}
          renderItem={renderCarouselItem}
          sliderWidth={300}
          itemWidth={300}
          loop={true}
        />
      </View>
      <Text style={styles.title}>Bienvenido a nuestra App</Text>
      <Text style={styles.description}>
        Desarollada por Emilio y Diego Chavez
      </Text>
      <View style={styles.iconContainer}>
        <View style={styles.iconWithLabel}>
          <TouchableOpacity
            onPress={() => handlePress("http://sii.cdjuarez.tecnm.mx")}
          >
            <Icon name="link" size={30} color="#007BFF" />
          </TouchableOpacity>
          <Text style={styles.iconLabel}>SII</Text>
        </View>
        <View style={styles.iconWithLabel}>
          <TouchableOpacity
            onPress={() => handlePress("http://cdjuarez.tecnm.mx")}
          >
            <Icon name="link" size={30} color="#007BFF" />
          </TouchableOpacity>
          <Text style={styles.iconLabel}>ITCJ</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Actualizar Galleria"
          onPress={updateCarouselItems}
          color="#007BFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Adjusted for better layout control
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 60, // Adjusted for spacing
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15, // Spacing between header and carousel
  },
  carouselContainer: {
    height: 200, // Adjust height as needed
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  carouselItem: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  carouselImage: {
    width: "100%",
    height: 150,
  },
  carouselText: {
    position: "absolute",
    bottom: 10,
    color: "white",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 40, // Adjust this value as needed to move the container down
  },
  iconWithLabel: {
    alignItems: "center", // Center the icon and label vertically
  },
  iconLabel: {
    marginTop: 8, // Space between icon and label
    color: "#007BFF", // Match the icon color or choose as per your design
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 60,
    paddingBottom: 20, // Ensure there's padding at the bottom
  },
});

export default HomeScreen1;
