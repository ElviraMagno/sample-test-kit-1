import React from "react";
import { View, Image, Text, Dimensions, TextInput, StyleSheet, SafeAreaView, Alert } from "react-native";
import {Button} from "react-native-elements";
import LottieView from 'lottie-react-native';
import Header from "../components/shortcut/Header";

export default function TabOneScreen(): JSX.Element {
  const [email, SetEmailText] = React.useState<string>("");
  const [Password, SetPasswordText] = React.useState<string>("");


const Login = () =>{
  const EmailAddress = "magnoelyn@gmail.com";
  const Password = "1234";

  if(email === EmailAddress && Password === Password){
     Alert.alert("Login", "Successfully Login")
  } else{
     Alert.alert("Login Error", "Wrong Email and Password")
  }
}

  return (
    <View
      style={style.container}
      
    >
  <Header />

      <View style={{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
        <Text style={{
          fontSize: 18,
          color:'black'
        }}>
          Create an account?
        </Text>
      </View>
    </View>
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