import React, { useState, useRef } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TextComponent,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import RNPickerSelect from "react-native-picker-select";
import UploadPicture from "../SvgIcon/UploadPicture";
import TakePicture from "../SvgIcon/TakePicture";
import DeleteIcon from "../SvgIcon/DeleteIcon";

const FormSection = ({ fields, formData = {}, setFormData }) => {
  const [dropdownState, setDropdownState] = useState({}); // Manage dropdown open and value

  const handleInputChange = (key, value) => {
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData);
  };

  const handleDropdownState = (key, open, value = null) => {
    setDropdownState((prev) => ({
      ...prev,
      [key]: { open, value: value ?? dropdownState[key]?.value },
    }));
    if (value) {
      handleInputChange(key, value); // Save selected value to form state
    }
  };

  const handleUpload = async (fieldId) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      handleInputChange(fieldId, result.assets[0].uri); // Save the selected image URI
    }
  };

  const handleTakePicture = async (fieldId) => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Camera permission is required to take pictures!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      handleInputChange(fieldId, result.assets[0].uri); // Save the captured image URI
    }
  };

  const handleDelete = (fieldId) => {
    handleInputChange(fieldId, null); // Clear the image URI
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <ScrollView contentContainerStyle={styles.container}> */}
      <View style={styles.container}>
        {fields.map((field) => (
          <View key={field.id} style={styles.fieldContainer}>
            <Text style={styles.label}>{field.label}</Text>
            {field.type === "text" && (
              <TextInput
                style={styles.input}
                placeholder={field.placeholder}
                value={formData[field.id] || ""}
                onChangeText={(value) => handleInputChange(field.id, value)}
              />
            )}
            {field.type === "radio" && (
              <View style={styles.radioGroup}>
                {field.options.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles.radioOption}
                    onPress={() => handleInputChange(field.id, option)}
                  >
                    <Text
                      style={[
                        styles.radioText,
                        formData[field.id] === option &&
                          styles.selectedRadioText,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            {field.type === "dropdown" && (
              
              <View style={styles.pickerContainer}>
              <RNPickerSelect
                onValueChange={(value) => handleInputChange(field.id, value)}
                items={field.options.map((option) => ({
                  label: option,
                  value: option,
                }))}
                style={{
                  inputIOS: [styles.dropdown, styles.border], // Combine base and border styles
                  inputAndroid: [styles.dropdown, styles.border], // Combine for Android
                }}
                placeholder={{
                  label: "Select an option",
                  value: null,
                }}
              />
              </View>
            )}
            {field.type === "upload" && (
              <View style={styles.uploadContainer}>
                {/* Show buttons or preview image based on whether an image exists */}
                {formData[field.id] ? (
                  <>
                    <Image
                      source={{ uri: formData[field.id] }}
                      style={styles.previewImage}
                      resizeMode="contain"
                    />
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => handleDelete(field.id)}
                    >
                      {/* <Text style={styles.deleteButtonText}>Delete</Text> */}
                      <DeleteIcon/>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TouchableOpacity
                      style={styles.uploadButton}
                      onPress={() => handleUpload(field.id)}
                    >
                      {/* <Text style={styles.uploadButtonText}>Upload</Text> */}
                      <UploadPicture/>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.uploadButton}
                      onPress={() => handleTakePicture(field.id)}
                    >
                      {/* <Text style={styles.uploadButtonText}>Take Picture</Text> */}
                      <TakePicture/>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            )}
          </View>
        ))}
      </View>
      {/* </ScrollView> */}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  radioGroup: {
    flexDirection: "row",
    marginTop: 10,
  },
  radioOption: {
    marginRight: 10,
  },
  radioText: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
  },
  selectedRadioText: {
    backgroundColor: "#007BFF",
    color: "white",
  },
  // dropdown: {
  //   borderColor: "#ccc",
  //   borderRadius: 5,
  //   padding: 10,
  // },
  dropdownContainer: {
    borderColor: "#ccc",
  },
  selectedItemContainer: {
    backgroundColor: "#e6f7ff",
  },
  selectedItemLabel: {
    fontWeight: "bold",
  },
  tickIcon: {
    tintColor: "#007BFF",
  },

  uploadContainer: {
    borderWidth:2,
    borderStyle:"dashed",
    height: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden", // Ensure the content stays within the container
  },
  uploadButton: {
    // backgroundColor: "#EF473A",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  uploadButtonText: {
    color: "#FFF",
  },
  previewText: {
    marginTop: 10,
    color: "green",
  },

  previewImage: {
    // marginTop: 10,
    width: 200,
    // height: 200,
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "#ccc",
    // width: "100%", // Full width of the container
    height: "100%", // Full height of the container
    borderRadius: 20, // Match the container's borderRadius
    resizeMode: "cover", // Ensure the image covers the container
  },
  deleteButton: {
    // backgroundColor: "#FF4D4D",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    width: 90,
    marginLeft: 20,
  },
  deleteButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  dropdown: {
    fontSize: 16,
    padding: 5,
    borderRadius: 8,
    // backgroundColor: "#fff", // Optional background color
    color: "black", // Text color
    textAlignVertical: "center",
  },
  border: {
    borderWidth: 10, // Border thickness
    borderColor: "black", // Border color
    marginVertical: 10, // Spacing around the dropdown
  },
  pickerContainer: {
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 5,
  height: 40,
  justifyContent: "center", // Center the content vertically
  paddingHorizontal: 10, // Provide horizontal padding for the text
  },
});

export default FormSection;
