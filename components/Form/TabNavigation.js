import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {

  const scrollViewRef = useRef(null);


  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
    
    const tabWidth = 100;
    const scrollPosition = activeIndex * tabWidth - tabWidth / 2 ;

    scrollViewRef.current?.scrollTo({
      x: scrollPosition > 0 ? scrollPosition : 0,
      animated : true,
    });
  },[activeTab] )

  return (
    <ScrollView
      horizontal={true} // Enable horizontal scrolling
      showsHorizontalScrollIndicator={false} // Hide scroll indicator
      ref={scrollViewRef}
      contentContainerStyle={styles.scrollContainer}
    >
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    
  },
  tab: {
    width: 100,
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5, // Add some spacing between tabs
    // marginLeft: 10
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  text: {
    color: '#000',
    textAlign: 'center',
  },
  activeText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default TabNavigation;
