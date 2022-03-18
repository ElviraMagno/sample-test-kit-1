import React from "react";
import { View, Image, Text, Dimensions, TextInput, StyleSheet, SafeAreaView, Alert } from "react-native";
import {Button} from "react-native-elements";
import LottieView from 'lottie-react-native';

export default function TabOneScreen() {
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
    <><View style={{
          flex: 100,
          paddingTop: 200,
      }}>
          <View style={{
              flex: 0,
              alignItems: 'center',
              width: '100%'
          }}>

              <TextInput
                  style={style.input}
                  onChangeText={SetEmailText}
                  value={email}
                  placeholder={"Enter your Email Addres"} />

          </View>

          <View style={{
              marginBottom: 4,
              alignItems: 'center',
          }}>

              <TextInput
                  style={style.input}
                  onChangeText={SetPasswordText}
                  value={Password}
                  placeholder={"Enter your Password"}
                  secureTextEntry={true} />
          </View>
          <View style={{}}>
              <Text style={{
                  fontSize: 14,
                  textAlign: 'right',
                  color: 'black',
                  paddingHorizontal: 10,
                  marginBottom: 40
              }}>
                  Forgot Password?
              </Text>
          </View>

          <Button
              title={"Login"}
              buttonStyle={{
                  backgroundColor: 'darkblue'
              }}
              type={"solid"}

              onPress={() => Login()}
          >

          </Button>




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