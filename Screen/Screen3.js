import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Screen3 = ({ navigation, route }) => {
  const [toDoNew, setToDoNew] = useState("");
  const { name, data, update } = route.params;
  const handleNavigate = () => {
    navigation.navigate("Screen2", { name, update });
  };

  function addTextToUserById(userId, newText) {
    fetch(
      `https://6544adfd5a0b4b04436cb89a.mockapi.io/api/todoapp/todo/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: [...data.todo, newText],
        }),
      }
    )
      .then((response) => response.json())
      .then((updatedData) => {
        console.log("Dữ liệu đã được cập nhật:", updatedData);
        update = update + 1;
      })
      .catch((error) => {
        console.error("Đã xảy ra lỗi khi cập nhật dữ liệu:", error);
      });
    console.log("update", update);
    handleNavigate();
  }
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/avatarA.png")}
            style={{ width: 50, height: 50, resizeMode: "contain" }}
          ></Image>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}>Hi {name}</Text>
            <Text>Have a great day ahead</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 30,
        }}
      >
        ADD YOUR JOB
      </Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: "80%",
            height: 40,
            flexDirection: "row",
            borderWidth: 1,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Entypo name="open-book" size={24} color="green" />
          </View>
          <TextInput
            placeholder="Enter your job"
            style={{
              width: "100%",
              height: 40,
              borderWidth: 0, // Sửa lỗi border
              marginLeft: 20,
            }}
            value={toDoNew}
            onChangeText={(text) => setToDoNew(text)}
          ></TextInput>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <TouchableOpacity
          style={{
            width: "30%",
            height: 50,
            backgroundColor: "#26c3d9",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => addTextToUserById(data.id, toDoNew)}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
            FINISH
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({});
