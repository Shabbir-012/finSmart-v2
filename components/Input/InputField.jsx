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
  IconComponent,
}) => {
  return (
    <View style={[container]}>
      <Text style={[labelStyle]}>{label}</Text>
      <View>
        {IconComponent ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              borderWidth: 2,
              borderRadius: 10,
              borderColor:"rgba(0, 0, 0, 0.25)",
              height: 50
            }}
          >
            <IconComponent />
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              style={[inputStyle]}
            />
          </View>
        ) : (
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={[inputStyle]}
          />
        )}
      </View>
    </View>
  );
};
export default InputField;
