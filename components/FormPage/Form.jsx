import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const Form = ({
  name,
  control,
  rules,
  label,
  placeholder,
  style,
  inputStyle,
}) => {
  return (
    <View style={[styles.container , style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={[
                styles.input,
                inputStyle,
                error && { borderColor: "red", borderWidth: 1 },
              ]}

              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}

            />
            {error && <Text style={styles.error}>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
    //   marginBottom: 20,
    },
    label: {
      fontSize: 14,
    //   marginBottom: 5,
    },
    input: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
    },
    error: {
      marginTop: 5,
      color: "red",
      fontSize: 12,
    },
  });



export default Form;
