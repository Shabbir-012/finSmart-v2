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
  personal: [{ id: 'name', label: 'Name' }, { id: 'age', label: 'Age' }],
  address: [{ id: 'street', label: 'Street' }, { id: 'city', label: 'City' }],
  family: [{ id: 'spouse', label: 'Spouse' }],
  nominee: [{ id: 'nomineeName', label: 'Nominee Name' }],
  documents: [{ id: 'document', label: 'Upload Document' }],
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
    flex: 1,
    marginTop: 50
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default EkycForm;
