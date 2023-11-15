import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./Screen/Screen1";
import Screen2 from "./Screen/Screen2";
import Screen3 from "./Screen/Screen3";
import Screen4 from "./Screen/Screen4";

import HomeToDo from "./Screen/HomeToDo";
import ToDoList from "./Screen/ToDoList";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const ToDo = () => {
  return (
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen
        name="HomeToDo"
        component={HomeToDo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ToDoList"
        component={ToDoList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="todolist" component={StackNavigator} />
        <Tab.Screen name="donut" component={Screen4} />
        <Tab.Screen name="ToDoList" component={ToDo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
