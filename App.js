import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const Loading = () => (
  <View style={styles.center}>
    <Text>...Loading</Text>
  </View>
);

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>List Of users</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text style={[styles.text, styles.item]}>{item.name}</Text>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 30,
  },
  text: {
    backgroundColor: "#444",
    height: 60,
    color: "white",
    fontSize: 20,
    fontWeight: "900",
    borderRadius: 8,
    textAlign: "center",
    textAlignVertical: "center",
    margin: 10,
  },
  item: {
    backgroundColor: "transparent",
    borderColor: "#444",
    borderWidth: 2,
    color: "#444",
    height: 40,
  },
});
