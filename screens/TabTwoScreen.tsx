import React from "react";
import { View, Image, Text, Dimensions, TextInput, StyleSheet, SafeAreaView, Alert } from "react-native";
import Header from "../components/Header";
import Inputs from "../components/Inputs";

export default function TabOneScreen() {

  

  return (
    <><View
      style={style.container}
    >
      <Header />

      <Inputs />


    </View><View style={{
      height: 50,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    }}>
        <Text style={{
          fontSize: 18,
          color: 'black'
        }}>
          Create an account?
        </Text>
      </View></>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#498fdd',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%'
  },
  input: {
    height: 50,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10
  },
})