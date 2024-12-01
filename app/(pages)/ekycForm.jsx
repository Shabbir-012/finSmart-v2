import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { saveFormData } from "../../store/formSlice";
import TabNavigation from "../../components/Form/TabNavigation";
import FormSection from "../../components/Form/FormSection";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomButton from "../../components/Button/CustomButton";

const tabs = [
  { id: "personal", label: "Personal" },
  { id: "address", label: "Address" },
  { id: "family", label: "Family" },
  { id: "nominee", label: "Nominee" },
  { id: "documents", label: "Documents" },
];

const fieldsMap = {
  personal: [
    {
      id: "title",
      label: "Title",
      type: "radio",
      options: ["Mr.", "Ms.", "Mrs.", "Others"],
    },
    {
      id: "nid",
      label: "NID Number",
      type: "text",
      placeholder: "Enter NID Number",
    },
    {
      id: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter Full Name",
    },
    {
      id: "dob",
      label: "Date of Birth",
      type: "text",
      placeholder: "Enter Date of Birth",
    },
    {
      id: "gender",
      label: "Gender",
      type: "radio",
      options: ["Male", "Female", "Other"],
    },
    {
      id: "nationality",
      label: "Nationality",
      type: "radio",
      options: ["Bangladeshi", "Non-Bangladeshi"],
    },
    {
      id: "profession",
      label: "Applicant Profession",
      type: "text",
      placeholder: "Enter your Profession",
    },
  ],
  address: [
    { id: "presentAddress", label: "Present Address", type: "section" },
    {
      id: "villageStreet",
      label: "Village/Street No",
      type: "text",
      placeholder: "Enter Village/Street Name",
    },
    {
      id: "district",
      label: "District",
      type: "dropdown",
      options: ["Dhaka", "Chattogram", "Sylhet", "Khulna"],
    },
    { id: "permanentAddress", label: "Permanent Address", type: "section" },
    {
      id: "villageNo",
      label: "Village No",
      type: "text",
      placeholder: "Enter Village Name",
    },
    {
      id: "districtPerm",
      label: "District",
      type: "dropdown",
      options: ["Dhaka", "Chattogram", "Sylhet", "Khulna"],
    },
  ],
  family: [
    {
      id: "fatherName",
      label: "Father's Name",
      type: "text",
      placeholder: "Enter Father's Name",
    },
    {
      id: "motherName",
      label: "Mother's Name",
      type: "text",
      placeholder: "Enter Mother's Name",
    },
    {
      id: "maritalStatus",
      label: "Marital Status",
      type: "dropdown",
      options: ["Single", "Married", "Other"],
    },
    {
      id: "spouseName",
      label: "Spouse Name",
      type: "text",
      placeholder: "Enter Spouse Name",
    },
  ],
  nominee: [
    {
      id: "nomineeName",
      label: "Nominee's Name",
      type: "text",
      placeholder: "Enter Nominee's Name",
    },
    {
      id: "nomineedot",
      label: "Date of Birth",
      type: "text",
      placeholder: "Enter Date of Birth",
    },
    {
      id: "relationWithNominee",
      label: "Relationship with Nominee",
      type: "text",
      placeholder: "Relationship",
    },
  ],
  documents: [{ id: "document", label: "Upload Document", type: "text" }],
};

const EkycForm = () => {
  const [activeTab, setActiveTab] = useState("personal"); //done
  const formData = useSelector((state) => state.form); // Access Redux state
  const dispatch = useDispatch(); // Dispatch actions

  // done
  const handleNext = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1].id);
  };

  //done
  const handlePrevious = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (currentIndex > 0) setActiveTab(tabs[currentIndex - 1].id);
  };

  const handleSubmit = () => {
    console.log("Submitting form data:", formData);
    // API call can be made here
  };

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#73E49A",
            height: 80,
          }}
        >
          <Text style={{ textAlign: "center", paddingTop: 25 }}>
            E-kyc Form
          </Text>
        </View>
        <View style={styles.container}>
          <View>
            <TabNavigation
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={(tab) => setActiveTab(tab)}
            />
          </View>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <FormSection
              fields={fieldsMap[activeTab]}
              formData={formData[activeTab]}
              setFormData={(data) =>
                dispatch(saveFormData({ section: activeTab, data }))
              }
            />

            {/* <View style={styles.buttonContainer}>
            <Button title="Previous" onPress={handlePrevious} />
            <Button title="Next" onPress={handleNext} />
            <Button title="Submit" onPress={handleSubmit} />
          </View> */}
            {/* </ScrollView> */}

            <View style={styles.footer}>
              <CustomButton
                title="Previous"
                onPress={handlePrevious}
                style={styles.button}
                textStyle={styles.textStyle}
              />
              {activeTab === tabs[tabs.length - 1].id ? (
                <CustomButton
                  title="Preview"
                  onPress={handleNext}
                  style={styles.button}
                  textStyle={styles.textStyle}
                />
              ) : (
                <CustomButton
                  title="Next"
                  onPress={handleNext}
                  style={styles.button}
                  textStyle={styles.textStyle}
                />
              )}
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(10),
    // marginLeft: 10,
    // marginRight: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    padding: 15,
    alignSelf: "center",
    borderRadius: 20,
    width: 100,
  },
  textStyle: {
    color: "#FFF",
    textAlign: "center",
  },
  footer: {
    marginLeft: 20,
    marginTop: 0,
    flexDirection: "row",
    gap: 120,
  },
});

export default EkycForm;
