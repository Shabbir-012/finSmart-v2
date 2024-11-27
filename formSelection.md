// import React from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';

// const FormSection = ({ fields, formData, setFormData }) => {
//   return (
//     <View style={styles.container}>
//       {fields.map((field) => (
//         <TextInput
//           key={field.id}
//           style={styles.input}
//           placeholder={field.label}
//           value={formData[field.id] || ''}
//           onChangeText={(value) =>
//             setFormData((prev) => ({ ...prev, [field.id]: value }))
//           }
//         />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   input: {
//     borderBottomWidth: 1,
//     marginBottom: 15,
//   },
// });

// export default FormSection;

//----------------------------------------------------------------------------

// import React from 'react';
// import { View,Text, TextInput, StyleSheet } from 'react-native';

// const FormSection = ({ fields, formData = {}, setFormData }) => {

// // console.log("Inside From selection. Receving form Data:", formData);

//   const handleInputChange = (key, value) => {
//     // Update the form data without relying on non-serializable `prev`
//     const updatedData = { ...formData, [key]: value };
//     setFormData(updatedData); // Send serialized data to Redux
//   };

//   return (
//     <View style={styles.container}>
//       {fields.map((field) => (
//         <View key={field.id}>
//         <Text>{field.label}</Text>
//         <TextInput
//           key={field.id}
//           style={styles.input}
//           placeholder={field.label}
//           value={formData[field.id] || ''}
//           onChangeText={(value) => handleInputChange(field.id, value)}
//         />
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     alignItems: "center"
//   },
//   input: {
//     // borderBottomWidth: 1,
//     // marginBottom: 15,
    
//       borderRadius: 5,
//       borderWidth: 1,
//       borderColor: "rgba(0, 0, 0, 0.25)",
//       backgroundColor: "rgba(196, 196, 196, 0.00)",
//       padding: 10,
//       height: 40,
//       width:360,
//       marginTop:10,
    
//   },
// });

// export default FormSection;

//---------------------------------------------------------


// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';

// const FormSection = ({ fields, formData = {}, setFormData }) => {
//   const handleInputChange = (key, value) => {
//     const updatedData = { ...formData, [key]: value };
//     setFormData(updatedData);
//   };

//   return (
//     <View style={styles.container}>
//       {fields.map((field) => (
//         <View key={field.id} style={styles.fieldContainer}>
//           <Text style={styles.label}>{field.label}</Text>
//           {field.type === 'text' && (
//             <TextInput
//               style={styles.input}
//               placeholder={field.placeholder}
//               value={formData[field.id] || ''}
//               onChangeText={(value) => handleInputChange(field.id, value)}
//             />
//           )}
//           {field.type === 'radio' && (
//             <View style={styles.radioGroup}>
//               {field.options.map((option) => (
//                 <TouchableOpacity
//                   key={option}
//                   style={styles.radioOption}
//                   onPress={() => handleInputChange(field.id, option)}
//                 >
//                   <Text
//                     style={[
//                       styles.radioText,
//                       formData[field.id] === option && styles.selectedRadioText,
//                     ]}
//                   >
//                     {option}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           )}
//           {field.type === 'dropdown' && (
//             <DropDownPicker
//               open={field.id === formData.dropdownOpen}
//               value={formData[field.id] || null}
//               items={field.options.map((option) => ({ label: option, value: option }))}
//               setOpen={() => handleInputChange('dropdownOpen', field.id)}
//               setValue={(callback) => handleInputChange(field.id, callback(null))}
//               setItems={() => {}}
//               style={styles.dropdown}
//               dropDownContainerStyle={styles.dropdownContainer}
//               placeholder="Select an option"
//             />
//           )}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   fieldContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//   },
//   radioGroup: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   radioOption: {
//     marginRight: 10,
//   },
//   radioText: {
//     padding: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     textAlign: 'center',
//   },
//   selectedRadioText: {
//     backgroundColor: '#007BFF',
//     color: 'white',
//   },
//   dropdown: {
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//   },
//   dropdownContainer: {
//     borderColor: '#ccc',
//   },
// });

// export default FormSection;

//-----------------------------------------------------

// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';

// const FormSection = ({ fields, formData = {}, setFormData }) => {
//   const [dropdownState, setDropdownState] = useState({}); // Manage dropdown open and value

//   const handleInputChange = (key, value) => {
//     const updatedData = { ...formData, [key]: value };
//     setFormData(updatedData);
//   };

//   const handleDropdownState = (key, open, value = null) => {
//     setDropdownState((prev) => ({
//       ...prev,
//       [key]: { open, value: value ?? dropdownState[key]?.value },
//     }));
//     if (value) {
//       handleInputChange(key, value); // Save selected value to form state
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {fields.map((field) => (
//         <View key={field.id} style={styles.fieldContainer}>
//           <Text style={styles.label}>{field.label}</Text>
//           {field.type === 'text' && (
//             <TextInput
//               style={styles.input}
//               placeholder={field.placeholder}
//               value={formData[field.id] || ''}
//               onChangeText={(value) => handleInputChange(field.id, value)}
//             />
//           )}
//           {field.type === 'radio' && (
//             <View style={styles.radioGroup}>
//               {field.options.map((option) => (
//                 <TouchableOpacity
//                   key={option}
//                   style={styles.radioOption}
//                   onPress={() => handleInputChange(field.id, option)}
//                 >
//                   <Text
//                     style={[
//                       styles.radioText,
//                       formData[field.id] === option && styles.selectedRadioText,
//                     ]}
//                   >
//                     {option}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           )}
//           {field.type === 'dropdown' && (
//             <DropDownPicker
//               open={dropdownState[field.id]?.open || false}
//               value={dropdownState[field.id]?.value || null}
//               items={field.options.map((option) => ({
//                 label: option,
//                 value: option,
//               }))}
//               setOpen={(open) => handleDropdownState(field.id, open)}
//               setValue={(callback) => handleDropdownState(field.id, false, callback())}
//               setItems={() => {}}
//               style={styles.dropdown}
//               dropDownContainerStyle={styles.dropdownContainer}
//               placeholder="Select an option"
//             />
//           )}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   fieldContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//   },
//   radioGroup: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   radioOption: {
//     marginRight: 10,
//   },
//   radioText: {
//     padding: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     textAlign: 'center',
//   },
//   selectedRadioText: {
//     backgroundColor: '#007BFF',
//     color: 'white',
//   },
//   dropdown: {
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//   },
//   dropdownContainer: {
//     borderColor: '#ccc',
//   },
// });

// export default FormSection;
