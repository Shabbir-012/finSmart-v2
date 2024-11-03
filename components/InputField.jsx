import {
  View,
  Text,
  
  TextInput,
  
} from "react-native";
import React from "react";


const InputField = ({ label, placeholder, style, onChangeText, value }) => {
  return (
    
      
        <View>
          <Text>{label}</Text>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={style}
          />
        </View>
      
    
  );
};
export default InputField;
