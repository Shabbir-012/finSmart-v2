import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { saveFormData } from "../../store/formSlice";
import TabNavigation from "../../components/Form/TabNavigation";
import FormSection from "../../components/Form/FormSection";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomButton from "../../components/Button/CustomButton";
import fieldsMap from "../../components/Form/TabContent";
import PreviewTab from "../../components/Form/PreviewTab";
import LeftArrow from "../../components/SvgIcon/LeftArrow";
import { router } from "expo-router";

const tabs = [
  { id: "personal", label: "Personal" },
  { id: "address", label: "Address" },
  { id: "family", label: "Family" },
  { id: "nominee", label: "Nominee" },
  { id: "documents", label: "Documents" },
  { id: "preview", label: "Preview" },
];

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
            // justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#73E49A",
            height: 80,
            flexDirection: "row",
            paddingTop: 25,
            gap: 125,
            paddingLeft: 20,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <LeftArrow />
          </TouchableOpacity>
          <Text style={{ textAlign: "center", fontWeight: "500" }}>
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
            nestedScrollEnabled={true} // Allow nested scrolling
          >
            {activeTab === "preview" ? (
              <PreviewTab formData={formData} />
            ) : (
              <FormSection
                fields={fieldsMap[activeTab]}
                formData={formData[activeTab]}
                setFormData={(data) =>
                  dispatch(saveFormData({ section: activeTab, data }))
                }
              />
            )}

            <View style={styles.footer}>
              <CustomButton
                title="Previous"
                onPress={handlePrevious}
                style={styles.button}
                textStyle={styles.textStyle}
              />
              {activeTab === tabs[tabs.length - 1].id ? (
                <CustomButton
                  title="Submit"
                  onPress={handleSubmit}
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
