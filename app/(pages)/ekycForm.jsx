import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveFormData } from '../../store/formSlice';
import TabNavigation from '../../components/Form/TabNavigation';
import FormSection from '../../components/Form/FormSection';

const tabs = [
  { id: 'personal', label: 'Personal' },
  { id: 'address', label: 'Address' },
  { id: 'family', label: 'Family' },
  { id: 'nominee', label: 'Nominee' },
  { id: 'documents', label: 'Documents' },
];

const fieldsMap = {
  personal: [
    { id: 'title', label: 'Title', type: 'radio', options: ['Mr.', 'Ms.', 'Mrs.', 'Others'] },
    { id: 'nid', label: 'NID Number', type: 'text', placeholder: 'Enter NID Number' },
    { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter Full Name' },
    { id: 'dob', label: 'Date of Birth', type: 'text', placeholder: 'Enter Date of Birth' },
    { id: 'gender', label: 'Gender', type: 'radio', options: ['Male', 'Female', 'Other'] },
    { id: 'nationality', label: 'Nationality', type: 'radio', options: ['Bangladeshi', 'Non-Bangladeshi'] },
  ],
  address: [
    { id: 'presentAddress', label: 'Present Address', type: 'section' },
    { id: 'villageStreet', label: 'Village/Street No', type: 'text', placeholder: 'Enter Village/Street Name' },
    { id: 'district', label: 'District', type: 'dropdown', options: ['Dhaka', 'Chattogram', 'Sylhet', 'Khulna'] },
    { id: 'permanentAddress', label: 'Permanent Address', type: 'section' },
    { id: 'villageNo', label: 'Village No', type: 'text', placeholder: 'Enter Village Name' },
    { id: 'districtPerm', label: 'District', type: 'dropdown', options: ['Dhaka', 'Chattogram', 'Sylhet', 'Khulna'] },
  ],
  family: [{ id: 'spouse', label: 'Spouse',type: 'text' }],
  nominee: [{ id: 'nomineeName', label: 'Nominee Name' ,type: 'text'}],
  documents: [{ id: 'document', label: 'Upload Document' ,type: 'text'}],
};

const EkycForm = () => {
  const [activeTab, setActiveTab] = useState('personal'); //done
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
    console.log('Submitting form data:', formData);
    // API call can be made here
  };

  return (
    <View style={styles.container}>
      
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab)}
      />
      <FormSection
        fields={fieldsMap[activeTab]}
        formData={formData[activeTab]}
        setFormData={(data) =>
          dispatch(saveFormData({ section: activeTab, data }))
        }
      />
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={handlePrevious} />
        <Button title="Next" onPress={handleNext} />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 50,
    // marginLeft: 10,
    // marginRight: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default EkycForm;
