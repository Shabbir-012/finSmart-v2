import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import LeftArrow from "../../assets/svg/arrow/leftArrow";
import Header from "../../components/TopBar/Header";

const ekycForm = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Header title="E-kyc" />
      <View
        style={{
          borderColor: "#B6B6B6",
          borderWidth: 1,
          height: 500,
          width: 360,
          borderRadius: 20,
        }}
      >
        
      </View>
    </View>
  );
};

const ekycFormStyle = StyleSheet.create({


});

export default ekycForm;
