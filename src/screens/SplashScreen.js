import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    let timeout;

    if (navigation && navigation.replace) {
      timeout = setTimeout(() => {
        navigation.replace("MainTabs"); // Use the correct screen name as defined in your MainNavigator
      }, 5000);
    }

    return () => timeout && clearTimeout(timeout); // Clear the timer when the component is unmounted
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/animations/splash.json")}
        autoPlay
        loop={false}
        style={styles.animation}
        onAnimationFinish={() => navigation.replace("MainTabs")} // Redirect after animation finishes
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 400,
    height: 400,
  },
});

export default SplashScreen;
