import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import { auth, db } from "../firebase";
import { DataTable } from "react-native-paper";

const optionsPerPage = [2, 3, 4];

const Home = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  const signiout = () => {
    auth
      .signOut()
      .then(function () {
        // Sign-out successful.
        navigation.replace("Login");
        console.log("Sign-out successful");
        setTimeout(() => {
          alert("You've been successfully signed out.");
        }, 650);
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };
  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const addEntry = () => {
    navigation.navigate("AddEntry");
  };
  return (  
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title numeric>Description</DataTable.Title>
            <DataTable.Title numeric>Activity</DataTable.Title>
            <DataTable.Title numeric>From</DataTable.Title>
            <DataTable.Title numeric>To</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>Washing Clothes</DataTable.Cell>
            <DataTable.Cell numeric>Sewa</DataTable.Cell>
            <DataTable.Cell numeric>10 am</DataTable.Cell>
            <DataTable.Cell numeric>11 am</DataTable.Cell>
          </DataTable.Row>
          
          

          <DataTable.Pagination
            page={page}
            numberOfPages={3}
            onPageChange={(page) => setPage(page)}
            label="1-2 of 6"
            optionsPerPage={optionsPerPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            showFastPagination
            optionsLabel={"Rows per page"}
          />
        </DataTable>
      <Button onPress={signiout} title="Sign out" />
      </ScrollView>
      <Button
        title="+"
        onPress={addEntry}
        containerStyle={styles.button2}
        titleStyle={styles.btitle2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button2: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-end",
    right: 10,
  },
  btitle2: {
    color: "white",
    fontSize: 30,
    borderColor: "#38d49d",
  },
  containerm: {
    // height: "100%",
    // backgroundColor: "#f7f7f7",
    // flex: 1,
    // flexDirection: "row",
    alignItems: "center",
    // flexDirection: "column",
    // justifyContent: "center",
  },
});

export default Home;
