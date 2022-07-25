import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const data = [
    { key: "1" },
    { key: "2" },
    { key: "3" },
    { key: "4" },
    { key: "5" },
    { key: "6" },
    { key: "7" },
    { key: "8" },
    { key: "9" },
    { key: "10" },
    { key: "11" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.text}>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 30,
  },
  text: {
    backgroundColor: "#444",
    height: 80,
    color: "white",
    fontSize: 20,
    fontWeight: "900",
    borderRadius: 8,
    textAlign: "center",
    textAlignVertical: "center",
    margin: 10,
  },
});
