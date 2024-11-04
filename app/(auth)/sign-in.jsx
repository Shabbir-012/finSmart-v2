import { View, Text, Image, Button, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import { globalStyles } from "../styles/Styles";
import CustomButton from "../../components/CustomButton";
import axios from "axios";

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onPressSignIn = async (data) => {
    try {
      const response = await axios.post(
        "http://192.168.10.42:8001/api/v1/users/login", // Ensure this URL is reachable
        data
      );
      if (response.status === 200) {
        reset();
      }

      console.log("Login Successful:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error during sign in:", error.response.data);

        alert(error.response.data.message || "Login failed.");
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response from the server. Please check your connection.");
      } else {
        console.error("Error:", error.message);
        alert("An error occurred: " + error.message);
      }
    }
  };

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
          <Text style={{ fontSize: 25, fontStyle: "normal", fontWeight: 700 }}>
            FinSmart App
          </Text>
        </View>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={[{ width: 350 }, globalStyles.inputContainer]}>
              <Text>Email</Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Enter your email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text>Password</Text>
              <TextInput
                style={[{ width: 350, marginBottom: 20 }, globalStyles.input]}
                placeholder="Enter your password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
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
