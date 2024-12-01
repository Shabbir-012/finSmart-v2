import { StyleSheet, Text, View } from "react-native";
import fieldsMap from "./TabContent";

const PreviewTab = ({ formData }) => {
    const renderPreview = () => {
      return Object.entries(fieldsMap).map(([section, fields]) => (
        <View key={section} style={styles.section}>
          <Text style={styles.sectionHeader}>{section.toUpperCase()}</Text>
          {fields?.map((field) => {
            const value = formData[section]?.[field.id] || "Not Provided";
            return (
              <View key={field.id} style={styles.previewRow}>
                <Text style={styles.label}>{field.label}:</Text>
                <Text style={styles.value}>{value}</Text>
              </View>
            );
          })}
        </View>
      ));
    };
  
    return <View>{renderPreview()}</View>;
  };
  

  const styles = StyleSheet.create({
    section: {
      marginBottom: 20,
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    sectionHeader: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#333",
    },
    previewRow: {
      flexDirection: "row",
      marginBottom: 8,
    },
    label: {
      fontWeight: "600",
      flex: 1,
      color: "#555",
    },
    value: {
      flex: 2,
      color: "#000",
    },
  });
  
  export default PreviewTab ;