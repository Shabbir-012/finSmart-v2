import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CustomButton = ({ title, onPress, style, textStyle }) => {
  return (
    <LinearGradient colors={["#FB6764", "#F6231E"]} style={[style]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[textStyle]}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CustomButton;
