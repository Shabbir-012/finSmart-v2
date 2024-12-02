import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const creditCard = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 1, backgroundColor: "red", justifyContent: "center" }}
      >
        <Text style={{ textAlign: "center" }}>header</Text>
      </View>
      <View
        style={{ flex: 6, backgroundColor: "yellow", justifyContent: "center" }}
      >
        <Text style={{ textAlign: "center" }}>Content</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        {/* <Text style={{ textAlign: "center" }}>Footer</Text> */}
        <View style={{ flex: 1 , backgroundColor: "blue"}}>
          <Text>Button 1</Text>
        </View>
        <View style={{ flex: 1 , backgroundColor: "lightBlue"}}>
          <Text>Button 2</Text>
        </View>
      </View>
    </View>
  );
};

export default creditCard;
