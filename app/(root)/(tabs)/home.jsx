import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <SafeAreaView style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={{ width: 25, height: 25 }}
        />
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

        <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
          <Text
            style={{
              marginLeft: 180,
              color: "red",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View style={{ backgroundColor: "#249E63" , height: 80, marginTop: 20 ,alignItems:"center"}}>
        <Text style={{color:"#ffff", }}>Apply for Products</Text>
      </View> */}
      <Text style={{ fontSize: 15, fontWeight: "400", marginTop: 10 }}>
        Services
      </Text>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <Image
            style={{ maxHeight: 60, maxWidth: 60 }}
            source={require("../../../assets/images/ekyc-3.png")}
          />
          <Text>E-Kyc</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
