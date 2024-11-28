
import React, { useState, useRef } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, TextComponent } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <ScrollView contentContainerStyle={styles.container}> */}
      <View style={styles.container}>
        {fields.map((field) => (
          <View key={field.id} style={styles.fieldContainer}>
            <Text style={styles.label}>{field.label}</Text>
            {field.type === 'text' && (
              <TextInput
                style={styles.input}
                placeholder={field.placeholder}
                value={formData[field.id] || ''}
                onChangeText={(value) => handleInputChange(field.id, value)}
              />
            )}
            {field.type === 'radio' && (
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
                        formData[field.id] === option && styles.selectedRadioText,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            {field.type === 'dropdown' && (
              <DropDownPicker
                open={dropdownState[field.id]?.open || false}
                value={dropdownState[field.id]?.value || null}
                items={field.options.map((option) => ({
                  label: option,
                  value: option,
                }))}
                setOpen={(open) => {
                  setDropdownState((prev) => ({
                    ...prev,
                    [field.id]: { ...prev[field.id], open },
                  }));
                }}
                setValue={(callback) => {
                  const value = callback();
                  handleDropdownState(field.id, false, value); // Update value and close dropdown
                }}
                setItems={() => {}} // Items are static, no need to manage them
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                placeholder="Select an option"
                listItemLabelStyle={{ color: '#000' }} // Label text color
                selectedItemContainerStyle={styles.selectedItemContainer}
                selectedItemLabelStyle={styles.selectedItemLabel}
                tickIconStyle={styles.tickIcon}
              />
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
    padding: 20,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    marginTop: 10,
  },
  radioOption: {
    marginRight: 10,
  },
  radioText: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
  },
  selectedRadioText: {
    backgroundColor: '#007BFF',
    color: 'white',
  },
  dropdown: {
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  dropdownContainer: {
    borderColor: '#ccc',
  },
  selectedItemContainer: {
    backgroundColor: '#e6f7ff',
  },
  selectedItemLabel: {
    fontWeight: 'bold',
  },
  tickIcon: {
    tintColor: '#007BFF',
  },
});

export default FormSection;
