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



import React from 'react';
import { View,Text, TextInput, StyleSheet } from 'react-native';

const FormSection = ({ fields, formData = {}, setFormData }) => {

// console.log("Inside From selection. Receving form Data:", formData);

  const handleInputChange = (key, value) => {
    // Update the form data without relying on non-serializable `prev`
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData); // Send serialized data to Redux
  };

  return (
    <View style={styles.container}>
      {fields.map((field) => (
        <View key={field.id}>
        <Text>{field.label}</Text>
        <TextInput
          key={field.id}
          style={styles.input}
          placeholder={field.label}
          value={formData[field.id] || ''}
          onChangeText={(value) => handleInputChange(field.id, value)}
        />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center"
  },
  input: {
    // borderBottomWidth: 1,
    // marginBottom: 15,
    
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.25)",
      backgroundColor: "rgba(196, 196, 196, 0.00)",
      padding: 10,
      height: 40,
      width:360,
      marginTop:10,
    
  },
});

export default FormSection;
