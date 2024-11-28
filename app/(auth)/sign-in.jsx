//  app/(auth)/sign-in.jsx
import { View, Text, Image, Button, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import  globalStyles  from "../styles/Styles";
import CustomButton from "../../components/Button/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useRouter } from "expo-router";
import API from "../api/axiosInstance";
import axios from 'axios'


export default function SignIn() {

  const storeTokens = async (accessToken, refreshToken) => {
    // console.log("Tokens being stored:", accessToken, refreshToken); // Log the tokens here
    try {
      if (accessToken && refreshToken) {
        await AsyncStorage.setItem("accessToken", accessToken);
        await AsyncStorage.setItem("refreshToken", refreshToken);

        console.log("Token Successfully stored");
        
      } else {
        console.error(
          "Invalid tokens. Access token or refresh token is missing."
        );
      }
    } catch (error) {
      console.log("Error saving tokens:", error);
    }
  };


  const handleAuthError = (error) => {
    if (error.response) {
      const message = error.response.data.message || "Login Failed";
      alert(message);
    } else if (error.request) {
      alert("No response from the server. Please check your connection");
    } else {
      alert("An unexpected error occured. Please try again");
    }
  };

  const onPressSignIn = async (data) => {

    // console.log(data);
    
    try {
      const response = await API.post("http://192.168.10.42:8001/api/v1/users/login", data);
      
      // console.log("sign in response",response.data.data);
      
      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data.data;

        console.log("Extracted tokens:", accessToken, refreshToken);

        await storeTokens(accessToken, refreshToken);

        reset();
        // router.push(`/${redirectTo || "home"}`);

        router.push("/home");
      }
      console.log("Login Successful:", response.data);
    } catch (error) {
   
      handleAuthError(error);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <SafeAreaView>
      <View style={{ marginTop: 50, marginLeft: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text
            style={{
              fontSize: 35,
              fontStyle: "normal",
              fontWeight: 800,
              color: "#6D6E72",
            }}
          >
            FinSmart
          </Text>
        </View>
        <View>
          <Text style={{ marginTop: 30, fontSize: 15 }}>Welcome to</Text>
          <Text
            style={{
              fontSize: 25,
              fontStyle: "normal",
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            FinSmart App
          </Text>
        </View>

        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          }}
          render={({ field: { onChange, onBlur, value }, fieldState:{error} }) => (
            <View style={[{ width: 350 }, globalStyles.inputContainer]}>
              <Text>Email</Text>
              <TextInput
                style={[globalStyles.input, error && {borderColor: "red"}]}
                placeholder="Enter your email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {error && <Text style={{color:"red"}}>{error.message}</Text>}
            </View>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{required: "Password is required"}}
          render={({ field: { onChange, onBlur, value },fieldState:{error} }) => (
            <View>
              <Text>Password</Text>
              <TextInput
                style={[{ width: 350, marginBottom: 20 }, globalStyles.input , error && {borderColor:"red"}]}
                placeholder="Enter your password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {error && <Text style={{color: "red"}}>{error.message}</Text>}
            </View>
          )}
        />

        <CustomButton
          title="Sign in"
          onPress={handleSubmit(onPressSignIn)}
          style={styles.button}
          textStyle={styles.textStyle}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(196, 196, 196, 0.00)",
    padding: 10,
    marginTop: 10,
    width: 350,
  },
  button: {
    padding: 15,
    alignSelf: "center",
    borderRadius: 20,
    width: 313,
  },
  textStyle: {
    color: "#FFF",
    textAlign: "center",
  },
});
