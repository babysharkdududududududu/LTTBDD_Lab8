import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Screen2 = ({ navigation, route }) => {
  const { name, job } = route.params;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [init, setInit] = useState([]);
  const url = "https://6544adfd5a0b4b04436cb89a.mockapi.io/api/todoapp/todo/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        const abc = res.find((item) => item.name === name);
        setFilter(abc.todo);
        setInit(abc.todo);
        console.log(abc.todo);
      });
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilter(init);
    } else {
      const filtered = filter.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      );
      setFilter(filtered);
    }
  }, [search]);

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Screen1")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
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
      </View>
      <View style={{ alignItems: "center", marginTop: 100 }}>
        <View
          style={{
            width: "90%",
            height: 40,
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <TextInput
            placeholder="Search"
            style={{
              width: "100%",
              height: 40,
              alignItems: "center",
              padding: 10,
            }}
            onChangeText={(text) => setSearch(text)}
            value={search}
          ></TextInput>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filter.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                width: "90%",
                height: 40,
                backgroundColor: "#d3d5d9",
                marginTop: 20,
                borderRadius: 10,
                justifyContent: "center",
                padding: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <AntDesign name="checkcircle" size={24} color="green" />
                <Text style={{ fontWeight: "bold" }}>{item}</Text>
                <EvilIcons name="pencil" size={24} color="red" />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("Screen3", { name, data });
        }}
      >
        <AntDesign name="pluscircle" size={50} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
