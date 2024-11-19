import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const ServiceCard = ({ IconComponent, title , onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{ flexDirection: "column", alignItems: "center", width: 94 }}
      >
        <IconComponent height={70} width={60} />
        <Text style={{ fontSize: 12,  marginTop: 5 }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
