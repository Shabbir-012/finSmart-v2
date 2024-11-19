import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "../SvgIcon/Logo";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const TopBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status when the component mounts
  useEffect(() => {
    const checkLoginStatus = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");
      setIsLoggedIn(!!accessToken);
    };

    checkLoginStatus();
  }, []);

  // Handle logout functionality
  // const handleLogout = async () => {
  //   try {
  //     const accessToken = await AsyncStorage.getItem("accessToken");

  //     if (accessToken) {
  //       // Make the logout API call
  //       const response = await axios.post(
  //         "http://192.168.10.42:8001/api/v1/users/logout",
  //         {},
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         }
  //       );

  //       if (response.status === 200) {
  //         // Clear tokens from AsyncStorage
  //         await AsyncStorage.removeItem("accessToken");
  //         await AsyncStorage.removeItem("refreshToken");

  //         // Update login status and redirect to login page
  //         setIsLoggedIn(false);
  //         router.push("/(auth)/sign-in");
  //       } else {
  //         // Handle any error response from the logout API
  //         console.error("Logout failed", response.data);
  //         alert("Logout failed. Please try again.");
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error during logout:", error);
  //     alert("Error during logout. Please try again.");
  //   }
  // };

  //------------------------------------------------
  const handleLogout = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      console.log("Access Token:", accessToken);

      if (accessToken) {
        // Update login state immediately to show "Login" before API call
        setIsLoggedIn(false);
        console.log("Logging out...");

        // Make the logout API call
        const response = await axios.post(
          "http://192.168.10.42:8001/api/v1/users/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log("Logout response:", response);

        if (response.status === 200) {
          // Clear tokens from AsyncStorage
          await AsyncStorage.removeItem("accessToken");
          await AsyncStorage.removeItem("refreshToken");

          const clearedToken = await AsyncStorage.getItem("accessToken");
console.log("Cleared Access Token:", clearedToken); // Should be null

          checkLoginStatus();

          // Redirect to the sign-in page
          router.push("/(auth)/sign-in");
        } else {
          console.error("Logout failed", response.data);
          alert("Logout failed. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Error during logout. Please try again.");
    }
  };

  //...............................................

  // Handle login redirection when the button is clicked
  const handleLoginRedirect = () => {
    if (!isLoggedIn) {
      router.push("/(auth)/sign-in");
    } else {
      handleLogout(); // Trigger logout if already logged in
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

      <TouchableOpacity onPress={handleLoginRedirect}>
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
