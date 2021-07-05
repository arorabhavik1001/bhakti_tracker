import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text, Icon } from "react-native-elements";
import { db } from "../firebase";
import DateTimePicker from '@react-native-community/datetimepicker';

const AddChat = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);
  const [sshow, setsShow] = useState(false);
  const [eshow, seteShow] = useState(false);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(new Date(1598051730000))
  const [endTime, setEndTime] = useState(new Date(1598051730000))
  const [description, setDescription] = useState('')
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Entry",
    });
  }, [navigation]);
  const createChat = async () => {
    if (input === "") {
      alert("Please enter all the details");
    } else {
      await db
        .collection("entries")
        .add({
          entryName: input,
        })
        .then(() => {
          navigation.goBack();
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const onsChange = (event, selectedTime) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const oneChange = (event, selectedTime) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  const showDatepicker = () => {
    setShow(true)
  };

  // const showsTimepicker = () => {
  //   setsShow(true)
  // };

  // const showeTimepicker = () => {
  //   seteShow(true)
  // };
  
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter activity name"
        placeholderTextColor="#0b51397e"
        value={input}
        style={{ marginTop: 20 }}
        onChangeText={(text) => setInput(text)}
      />
      <Input
        placeholder="Description"
        placeholderTextColor="#0b51397e"
        value={description}
        style={{ marginTop: 20 }}
        onChangeText={(text) => setDescription(text)}
      />
      <Button 
        title="Click here to enter date"
        onPress={showDatepicker}
        buttonStyle={styles.button}
      />
      <Button 
        title="Click here to enter start time"
        // onPress={showsTimepicker}
        buttonStyle={styles.button}
      />
      <Button 
        title="Click here to enter end time"
        // onPress={showeTimepicker}
        buttonStyle={styles.button}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {/* {sshow && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {eshow && (
        <DateTimePicker
          testID="dateTimePicker"
          value={endTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )} */}
      <Button
        title="Create entry"
        buttonStyle={styles.buttonb}
        onPress={createChat}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonb: {
    backgroundColor: "#38d49d",
    marginTop: 15,
  },
  button: {
    margin: 5,
  },
  container: {
    height: "100%",
    backgroundColor: "#fff",
    padding: 30,
  },
});
export default AddChat;
