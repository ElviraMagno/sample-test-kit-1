import * as React from "react";
import { Fragment, useState } from "react";
import { View, StyleSheet, Text, Alert, Image, ActivityIndicator, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { Button } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { Formik } from 'formik';
import * as yup from "yup";
import ViewWithLoading from "../components/ViewWithLoading";


export default function LoginForm() {


    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const loginSchema = yup.object({
      Firstname: yup.string().required('First name is required'),
      Lastname: yup.string().required('Last name is required'),
        email: yup.string().required('Email address is required')
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
                'Invalid email address'),
        password: yup.string().required('Password is required'),
        confirmpassword: yup.string().required('Confirm password is required')
    });

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, [])


    return (
        <ViewWithLoading loading={loading} >
        
        <View style={{
            flex: 1,
        }}>

            <Formik
                initialValues={{
                    Firstname: '',
                    Lastname: '',
                    email: '',
                    password: '',
                    confirmpassword:''
                }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
                }}
                validationSchema={loginSchema}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <Fragment>

<Image
          style={{
            height: 10,
            width: 500,
            paddingBottom: '65%',
            alignSelf: 'center',

          }}
          source={{
            uri: 'https://cdn.dribbble.com/users/1986212/screenshots/6144741/sign-in---character-for-animation.gif'
          }} />
      <ScrollView style={styles.scrollView}>


                        <View style={{
                           paddingTop: 10,
                           paddingHorizontal: 15,
                           paddingBottom: 0 
                        }}>
                            <TextInput
                                label="Enter your Firstname"
                                value={values.Firstname}
                                onChangeText={handleChange('Firstname')}
                                autoComplete={false}
                                mode={"outlined"}
                                autoCapitalize={"none"}
                                autoCorrect={false}
                                autoFocus={true}
                                error={errors.Firstname ? true : false}
                            />
                            {errors.Firstname &&
                                <Text>
                                    {errors.Firstname}
                                </Text>
                            }
                        </View>
                        <View style={{
                           paddingTop: 10,
                           paddingHorizontal: 15,
                           paddingBottom: 0
                        }}>
                          
                            <TextInput
                                label="Enter your Lastname"
                                value={values.Lastname}
                                onChangeText={handleChange('Lastname')}
                                autoComplete={false}
                                mode={"outlined"}
                                autoCapitalize={"none"}
                                autoCorrect={false}
                                autoFocus={true}
                                error={errors.Lastname ? true : false}
                            />
                            {errors.Lastname &&
                                <Text>
                                    {errors.Lastname}
                                </Text>
                            }
                        </View>
                        <View style={{
                           paddingTop: 10,
                           paddingHorizontal: 15,
                           paddingBottom: 0
                        }}>
                            <TextInput
                                label="Email"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                autoComplete={false}
                                keyboardType={"email-address"}
                                mode={"outlined"}
                                right={
                                    <TextInput.Icon
                                        name={"email"}
                                        color={"blue"}
                                    />
                                }
                                autoCapitalize={"none"}
                                autoCorrect={false}
                                autoFocus={true}
                                error={errors.email ? true : false}
                            />
                            {errors.email &&
                                <Text>
                                    {errors.email}
                                </Text>
                            }
                        </View>

                        <View style={{
                           paddingTop: 10,
                           paddingHorizontal: 15,
                           paddingBottom: 0
                        }}>
                            <TextInput
                                label="Create Password"
                                value={values.password}
                                onChangeText={handleChange('password')}
                                autoComplete={false}
                                mode={"outlined"}
                                right={
                                    <TextInput.Icon
                                        name={visible ? "eye" : "eye-off"}
                                        onPress={() => {
                                            setVisible(!visible);
                                        }}
                                        color={"blue"}
                                    />
                                }
                                secureTextEntry={!visible}
                                error={errors.password ? true : false}
                            />
                            {errors.password &&
                                <Text>
                                    {errors.password}
                                </Text>
                            }
                        </View>

                        <View style={{
                            paddingTop: 10,
                            paddingHorizontal: 15,
                            paddingBottom: 0
                        }}>
                            <TextInput
                                label="Confirm Password"
                                value={values.password}
                                onChangeText={handleChange('confirmpassword')}
                                autoComplete={false}
                                mode={"outlined"}
                                right={
                                    <TextInput.Icon
                                        name={visible ? "eye" : "eye-off"}
                                        onPress={() => {
                                            setVisible(!visible);
                                        }}
                                        color={"blue"}
                                    />
                                }
                                secureTextEntry={!visible}
                                error={errors.confirmpassword ? true : false}
                            />
                            {errors.confirmpassword &&
                                <Text>
                                    {errors.confirmpassword}
                                </Text>
                            }
                        </View>

                        <View style={{
                            flex: 0,
                        }}>

                          <View style={{
                           paddingTop: 10,
                           paddingHorizontal: 15,
                           paddingBottom: 0
                            }}>
                                <Button
                                      title="REGISTER"
                                      buttonStyle={{
                                          backgroundColor: 'darkblue',
                                          paddingTop: 3,
                                      }}
                                      containerStyle={{
                                          marginVertical: 10,
                                      }}
                                      onPress={handleSubmit}
                                      titleStyle={styles.textStyle}
                                    
                                />
                                

           <Text style={{
            color: 'black',
            textAlign: 'center',
            paddingHorizontal: 10,
            paddingTop: 1
          }}
          >Already Registered? Login here</Text>


                                </View>
                            </View>

      </ScrollView>


                        
                    </Fragment>
                    
                )}
                
            </Formik>

        </View>
        
        </ViewWithLoading>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        justifyContent: 'center',
       
    },
    overrideContainer: {
        backgroundColor: 'green'
    },
    textStyle: {
      color: 'white',
      textAlign: 'center',
      paddingHorizontal: 50,
      paddingTop: 9

    },
    input: {
      height:32,
      width: '90%',
      margin: 4,
      borderWidth: 1,
      padding: 3,
      backgroundColor: '#fbfbfb',
      borderRadius: 10,
     color: '#062C30'
    },
});

function setRegister(arg0: string): React.ReactNode {
    throw new Error("Function not implemented.");
}
