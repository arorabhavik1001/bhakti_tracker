import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterSceen from "./Screens/RegisterScreen";
import Login from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import AddEntry from './Screens/AddEntry'

const globalScreenStyles = {
  headerStyle: { backgroundColor: "#0b9deb" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "#2C5F2DFF",
  headerTitleAlign: "center",
};

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenStyles}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={RegisterSceen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddEntry" component={AddEntry} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
