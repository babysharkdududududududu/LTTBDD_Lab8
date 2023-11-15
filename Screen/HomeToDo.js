import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const HomeToDo = ({ navigation }) => {
  const [name, setName] = useState("name1");
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#33ff33", fontSize: 25, fontWeight: "bold" }}>
        Welcome to TODOAPP
      </Text>
      <View style={{ width: 200, height: 50, borderWidth: 1, borderRadius: 5 }}>
        <TextInput
          placeholder="Enter your name"
          style={{
            width: 200,
            height: 50,
            padding: 10,
            fontStyle: "italic",
            color: "#ccc",
          }}
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={{
          width: 100,
          height: 40,
          backgroundColor: "#00CCFF",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          borderRadius: 5,
        }}
        onPress={() => {
          navigation.navigate("ToDoList", { name });
        }}
      >
        <Text
          style={{
            fontStyle: "italic",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Let's go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeToDo;

const styles = StyleSheet.create({});
