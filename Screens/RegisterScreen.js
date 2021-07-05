import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from "react-native-elements";
import { auth } from "../firebase";
import { db } from "../firebase";
import { RadioButton } from "react-native-paper";

const RegisterSceen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const registerUser = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        });
      })
      .catch((err) => alert(err.message));

    db.collection("users")
      .add({
        name: name,
        email: email,
        role: role,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 20, color: "#38d49d" }}>
        Create a GIVE Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="text"
          value={email}
          onChangeText={(text) => setMail(text)}
        />
        <Input
          placeholder="Password"
          type="text"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View
          style={{
            marginLeft: 60,
            // flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: 180,
            marginRight: 20,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 180,
              marginRight: 20,
            }}
          >
            <RadioButton
              value="Full-time Devotee"
              status={role === "Full-time Devotee" ? "checked" : "unchecked"}
              onPress={() => setRole("Full-time Devotee")}
            />
            <Text style={{ marginRight: 10 }}>Full-time Devotee</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 180,
              marginRight: 20,
            }}
          >
          <RadioButton
            value="Congregation Devotee"
            status={role === "Congregation Devotee" ? "checked" : "unchecked"}
            onPress={() => setRole("Congregation Devotee")}
          />
          <Text>Congregation Devotee</Text>
        </View>
        </View>
      </View>
      <Button
        title="Register"
        onPress={registerUser}
        raised
        buttonStyle={styles.button}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
    backgroundColor: "#f1f1f1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: 300,
    marginBottom: 15,
  },
  button: {
    width: 200,
    backgroundColor: "#38d49d",
    // marginTop: 15,
  },
});

export default RegisterSceen;
