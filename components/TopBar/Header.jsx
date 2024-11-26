import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import LeftArrow from "../../assets/svg/arrow/leftArrow";

const Header = ({ title }) => {
  return (
    <LinearGradient colors={["#73E49A", "#128238"]} style={headerStyle.content}>
      <LeftArrow />
      <Text style={headerStyle.textStyle}>{title}</Text>
    </LinearGradient>
  );
};

const headerStyle = StyleSheet.create({
  content: {
    flexDirection: "row",
    gap: 50,
    padding: 15,
    alignSelf: "center",
    width: "100%",
    height: 80,
    paddingTop: 40,
    marginBottom: 10,
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
    fontSize: 18,
  },
});

export default Header;
