import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Screen4 = () => {
  // get Type
  const [tempType, setTempType] = React.useState([]);
  const url = "https://6544adfd5a0b4b04436cb89a.mockapi.io/api/todoapp/donut/";
  useEffect(() => {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        const uniqueTypes = [];
        res.forEach((item) => {
          if (!uniqueTypes.includes(item.type)) {
            uniqueTypes.push(item.type);
          }
        });
        setTempType(uniqueTypes);
        setData(res); // Set the data state here
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // getData based on selected type
  const [selectedType, setSelectedType] = useState(null);
  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  const [data, setData] = useState([]); // Add the data state

  useEffect(() => {
    if (selectedType) {
      const filteredItems = data.filter((item) => item.type === selectedType);
      setFilteredData(filteredItems);
    }
  }, [selectedType, data]);

  const [filteredData, setFilteredData] = useState([]);

  return (
    <View>
      <View>
        <Text style={{ fontSize: 14, color: "#ccc" }}>Welcome, Jala!</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Choose your Best food
        </Text>
        <View
          style={{
            width: "60%",
            height: 50,
            borderWidth: 1,
            margin: 20,
          }}
        >
          <TextInput
            placeholder="Search food"
            style={{
              height: 47,
              padding: 15,
              backgroundColor: "#f7f7f7",
              fontWeight: "bold",
              color: "#ccc",
            }}
          />
        </View>
      </View>

      {/* Load type */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {tempType.map((type, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: 100,
              height: 40,
              backgroundColor: selectedType === type ? "#f1b000" : "#ccc", // Highlight selected type
              padding: 10,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => handleTypeSelection(type)}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: selectedType === type ? "white" : "black", // Adjust text color based on selection
              }}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Display filtered data */}
      <View>
        {filteredData.map((item) => (
          <View key={item.id}>
            <Text>Title: {item.title}</Text>
            <Text>Description: {item.des}</Text>
          </View>
        ))}
      </View>

      {selectedType ? (
        <View>
          {filteredData.map((item, index) => (
            <View key={item.id}>
              <Text>Title: {item.title}</Text>
              <Text>Description: {item.des}</Text>
            </View>
          ))}
        </View>
      ) : (
        <View>
          {data.map((item, index) => (
            <View key={item.id}>
              <Text>Title: {item.title}</Text>
              <Text>Description: {item.des}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Screen4;

const styles = StyleSheet.create({});
