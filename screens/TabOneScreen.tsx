import React from "react";
import { View, Image, Text, Dimensions, TextInput, StyleSheet, SafeAreaView, Alert } from "react-native";
import {Button} from "react-native-elements";
import LottieView from 'lottie-react-native';

export default function TabOneScreen() {
      
  return (
    <><View
    style={style.container}
  >

    <View
    style={{
      height: 20,
      width: '100%',
      alignItems: 'center',
    }}
    ></View>
        <Image
          style={{
            height: 50,
            width: 500,
            paddingBottom: '100%',
            alignSelf: 'center',

          }}
          source={{
            uri: 'https://cdn.dribbble.com/users/1986212/screenshots/6144741/sign-in---character-for-animation.gif'
          }} />

      </View><View style={{
        flex: 60,
        paddingTop: 40,
        paddingBottom: 0
      }}>
        <View style={{
          flex: 0,
          alignItems: 'center',
          width: '100%'
        }}>

          <TextInput
            style={style.input}
            placeholder={"Email Address"} />

        </View>

        <Text style={{
          paddingTop: 0,
          color: 'black',
          textAlign: 'right',
          paddingHorizontal: 20,
          paddingBottom: 10
        }}>Required</Text>

        <View style={{
          marginBottom: 3,
          alignItems: 'center',
        }}>

          <TextInput
            style={style.input}
            placeholder={"Password"}
            secureTextEntry={true} />
        </View>
        <Text style={{
          paddingTop: 0,
          color: 'black',
          textAlign: 'right',
          paddingHorizontal: 20,
          paddingBottom: 10
        }}>Required</Text>

        <View style={{
          marginBottom: 4,
          alignItems: 'center',
        }}>

          <TextInput
            style={style.input}
            placeholder={"Confirm Password"}
            secureTextEntry={true} />
        </View>
        <Text style={{
          color: 'black',
          textAlign: 'right',
          paddingHorizontal: 10,
          paddingTop: 0,
          paddingBottom: 10
        }}>Required</Text>



        <View style={{
          paddingTop: 30
        }}>
          <Button
            title={"Sign Up"}
            buttonStyle={{
              backgroundColor: 'darkblue',
              width: '90%',
              alignSelf: "center",
              borderRadius: 10,
            }}
            type={"solid"}
          >
          </Button>
          <Text style={{
            color: 'black',
            textAlign: 'right',
            paddingHorizontal: 50,
            paddingTop: 9
          }}
          >Already Sign in?</Text>



        </View>

      </View></>
  )
  }
  
  const style = StyleSheet.create({
    container: {
  
      backgroundColor: 'white',
      justifyContent: 'center',
      paddingHorizontal: 20,
      width: '100%'
    },
    input: {
      height:50,
      width: '90%',
      margin: 8,
      borderWidth: 1,
      padding: 5,
      backgroundColor: '#fbfbfb',
      borderRadius: 10,
     color: '#062C30'
  
    },
  });