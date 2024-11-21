import { View, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "../SvgIcon/Logo";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import API from "../../app/api/axiosInstance";
import axios from "axios";

const TopBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 

  useEffect(() => {
    const checkLoginStatus = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");
      const refreshToken = await AsyncStorage.getItem("refreshToken");

      console.log("Stored Tokens:", accessToken , refreshToken);

      if (accessToken && refreshToken) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogOut = async () => {

    try {
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      const accessToken = await AsyncStorage.getItem("accessToken");

      // Check if tokens exist
      if (!refreshToken) throw new Error("Refresh token not found");
      if (!accessToken) throw new Error("Access token not found");

      

      if (!accessToken || !refreshToken) {
        Alert.alert("Cannot log out: Missing tokens");
        return;
      }

      console.log("Sending logout request...");
      console.log("refreshToken" , refreshToken);
      console.log("accessToken" , accessToken);
      
      const data =  {
        refreshToken : refreshToken 
      }

      const response = await axios.post(
        "http://192.168.10.42:8001/api/v1/users/logout",
        null, // No body
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      //--------------------------------------
      // const response = await axios.post(
      //   "http://192.168.10.42:8001/api/v1/users/logout",
      //   { refreshToken }, // Only send the refresh token
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );


      console.log("Logout response", response.data);

      // Remove tokens from storage
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("refreshToken");


      setIsLoggedIn(false);
      router.push("/home");
      Alert.alert("Logged out successfully");
    } catch (error) {
      console.log("Error during logout", error.message);
      Alert.alert("Failed to log out. Please try again.");
    }
  };

  const handleButtonPress = () => {
    if (isLoggedIn) {
      handleLogOut();
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}
    >
      <Logo width={25} height={25} marginRight={10} />
      <Text
        style={{
          fontSize: 20,
          fontStyle: "normal",
          fontWeight: 800,
          color: "#6D6E72",
        }}
      >
        FinSmart
      </Text>

      <TouchableOpacity onPress={handleButtonPress}>
        <Text
          style={{
            marginLeft: 180,
            color: "red",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
