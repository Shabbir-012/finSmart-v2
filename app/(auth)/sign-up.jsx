import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import CustomButton from "../../components/CustomButton";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { globalStyles } from "../styles/Styles";

// Define validation schema using Zod
const schema = z.object({
  username: z
    .string()
    .min(2, "User name is required and must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema), // Integrates zod validation
  });

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://192.168.10.42:8001/api/v1/users/register", // Ensure this URL is reachable
        data
      );

      if (response.status === 201) {
        reset();
      }

      console.log("Registration Successful:", response.data);
      // Handle success (e.g., navigate to another screen or show a success message)
    } catch (error) {
      if (error.response) {
        // The request was made, and the server responded with a status code
        console.error("Error during registration:", error.response.data);
        // Show a specific error message to the user
        alert(error.response.data.message || "Registration failed.");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        alert("No response from the server. Please check your connection.");
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error:", error.message);
        alert("An error occurred: " + error.message);
      }
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Create Your Account</Text>

      {/* Name Field */}
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={globalStyles.inputContainer}>
            <Text>User name</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Enter your user name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.username && (
              <Text style={styles.error}>{errors.username.message}</Text>
            )}
          </View>
        )}
      />

      {/* Email Field */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={globalStyles.inputContainer}>
            <Text>Email</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Enter your email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
            {errors.email && (
              <Text style={styles.error}>{errors.email.message}</Text>
            )}
          </View>
        )}
      />

      {/* Password Field */}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={globalStyles.inputContainer}>
            <Text>Password</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Enter your password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password.message}</Text>
            )}
          </View>
        )}
      />

      {/* Submit Button */}
      <CustomButton
        title="Sign Up"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
        textStyle={styles.textStyle}
      />
      <View>
        <Text>Already have an account.</Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginTop: 5,
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
