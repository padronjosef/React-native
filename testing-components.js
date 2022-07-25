import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

const width = Dimensions.get("window").width;

const TextComponent = ({ text, style }) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [submit, setSubmit] = useState("");

  const handlePress = () => {
    setSubmit(textValue);
    alert("Text sent successfully");
  };

  const toMap = Array.from({ length: 20 }).map((currentElement, i) => i)

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        justifyContent={"center"}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      >
        {toMap.map(item => (
          <Text key={item} style={styles.text}>TEXT</Text>
        ))}
        <Text> total of all: {submit}</Text>
      </ScrollView>
      {/* <TextInput
        placeholder="write a text"
        style={styles.input}
        onChangeText={setTextValue}
        defaultValue={textValue}
      />
      <Button onPress={handlePress} title="send" />

      <TouchableHighlight
        style={{ marginTop: 12, padding: 20 }}
        onPress={handlePress}
        underlayColor={"blue"}
        activeOpacity={0.2}
      >
        <Text>send</Text>
      </TouchableHighlight>

      <TouchableNativeFeedback
        style={{ marginTop: 12, padding: 20 }}
        onPress={handlePress}
        background={TouchableNativeFeedback.Ripple("#00F", true)}
      >
        <View style={styles.view}>
          <Text>send</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableOpacity style={styles.TouchableOpacity} onPress={handlePress}>
        <View style={styles.view}>
          <Text
            style={{
              textAlignVertical: "center",
              padding: "auto",
            }}
          >
            send Opacity
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback
        style={styles.TouchableOpacity}
        onPress={handlePress}
      >
        <View style={styles.view}>
          <Text
            style={{
              textAlignVertical: "center",
              padding: "auto",
            }}
          >
            No Feedback
          </Text>
        </View>
      </TouchableWithoutFeedback> */}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: width,
  },
  TouchableOpacity: {
    backgroundColor: "#eee",
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    backgroundColor: "#222",
    borderRadius: 4,
    textAlignVertical: "center",
    textAlign: "center",
    margin: 4,
    fontSize: 24,
    height: 100,
    width: width - 8,

  },
  input: {
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 4,
    backgroundColor: "#eee",
    width: "100%",
    maxWidth: 250,
    padding: 8,
    margin: 8,
  },
  green: {
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    gap: 4,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
