import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Screen3 = ({ navigation, route }) => {
  const { name, data } = route.params;
  const [job, setJob] = React.useState("");
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
            <Text>Have agreate day a head</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Screen2", { name })}
        >
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
              border: "none",
              marginLeft: 20,
            }}
            onChangeText={(text) => setJob(text)}
            value={job}
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
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Screen2", { name, job })}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
            FINISH
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Name: {data.name}</Text>
        <Text>Todo: {data.todo}</Text>
        <Text>ID: {data.id}</Text>
      </View>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({});
