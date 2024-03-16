import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const data = [
  { id: "1", title: "Emilio" },
  { id: "2", title: "Diego" },
  { id: "3", title: "Elsie" },
  { id: "4", title: "Grey" },
  // Add more items as needed
];

const HomeScreen2 = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => alert(`Selecionaste a ${item.title}`)}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Use SafeAreaView here */}
      <Text style={styles.header}>Esta es la segunda pantalla</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  item: {
    backgroundColor: "#007BFF",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    width: 300,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: "#FFF",
  },
});

export default HomeScreen2;
