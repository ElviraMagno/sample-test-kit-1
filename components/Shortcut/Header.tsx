import * as React from "react";
import { View } from "react-native";
import { Image, Text, Dimensions, TextInput, StyleSheet, SafeAreaView, Alert } from "react-native";

export default function Header(){
    return (
        <View
        style={{
          height: 200,
          width: '100%',
          alignItems: 'center',
        }}
        >
          <Image
          style={{
            height: '150%',
            width: '150%',
            paddingBottom: '100%',
            borderRadius: 200,
          }}
          source={{
            uri:'https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif'
          }}
          />

          </View>
        )
    }