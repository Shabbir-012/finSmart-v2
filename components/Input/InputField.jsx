 import { View, Text, TextInput } from "react-native";
import React from "react";

const InputField = ({
  label,
  placeholder,
  labelStyle,
  onChangeText,
  inputStyle,
  value,
  container,
}) => {
  return (
    <View style={[container]}>
      <Text style={[labelStyle]}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[inputStyle]}
      />
    </View>
  );
};
export default InputField;
