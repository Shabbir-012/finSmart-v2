import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            activeTab === tab.id && styles.activeTab
          ]}
          onPress={() => setActiveTab(tab.id)}
        >
          <Text style={activeTab === tab.id ? styles.activeText : styles.text}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  text: {
    color: '#000',
  },
  activeText: {
    color: '#fff',
  },
});

export default TabNavigation;
