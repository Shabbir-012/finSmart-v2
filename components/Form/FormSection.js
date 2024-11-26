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
import { View, TextInput, StyleSheet } from 'react-native';

const FormSection = ({ fields, formData = {}, setFormData }) => {
  const handleInputChange = (key, value) => {
    // Update the form data without relying on non-serializable `prev`
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData); // Send serialized data to Redux
  };

  return (
    <View style={styles.container}>
      {fields.map((field) => (
        <TextInput
          key={field.id}
          style={styles.input}
          placeholder={field.label}
          value={formData[field.id] || ''}
          onChangeText={(value) => handleInputChange(field.id, value)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
  },
});

export default FormSection;
