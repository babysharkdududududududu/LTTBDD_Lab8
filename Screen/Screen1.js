import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Screen1 = ({ navigation }) => {
  const [name, setName] = React.useState("name1");
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/Image_95.png")}
          style={{ width: 200, height: 200, resizeMode: "contain" }}
        ></Image>
      </View>
      <View>
        <Text
          style={{
            color: "violet",
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          MANAGE YOUR
        </Text>
        <Text
          style={{
            color: "violet",
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          TASK
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: "90%",
            height: 60,
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <TextInput
            placeholder="Enter your name"
            style={{
              width: "100%",
              height: 60,
              alignItems: "center",
              padding: 10,
            }}
            onChangeText={(text) => setName(text)}
            value={name}
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Screen2", { name })}
      >
        <View
          style={{
            backgroundColor: "#26c3d9",
            width: 200,
            height: 50,
            marginTop: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            GET STARTED
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
