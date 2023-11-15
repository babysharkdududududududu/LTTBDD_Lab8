import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";

const ToDoList = ({ navigation, route }) => {
  const { name } = route.params;

  const [data, setData] = useState([]);
  console.log(data);
  const job = data.todo ? data.todo : [];
  console.log(job);

  const url = "https://6544adfd5a0b4b04436cb89a.mockapi.io/api/todoapp/todo/";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const tempTodo = res.find((item) => item.name === name);
        setData(tempTodo);
        console.log(tempTodo);
      });
  }, []);

  return (
    <View>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Hello </Text>
          <Text style={{ fontSize: 16, fontStyle: "italic" }}>{name}!</Text>
        </View>
        <Text style={{ fontSize: 16, fontStyle: "italic", color: "#880000" }}>
          Have a good day! Let start with your task.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ width: "80%", height: 50, backgroundColor: "#fcfcfc" }}>
          <TextInput
            placeholder="Enter your job"
            style={{ height: 50, backgroundColor: "#fcfcfc", padding: 20 }}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={{
            width: 90,
            height: 90,
            backgroundColor: "green",
            borderRadius: 100,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 60, fontWeight: "bold", color: "white" }}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {job.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  item: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 12,
    padding: 16,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    color: "#333333",
  },
});
