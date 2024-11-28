//  App/(root)/(tabs)/_layout.tsx

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Tabs } from "expo-router";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
  return (
    <SafeAreaProvider>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: verticalScale(60),
          paddingVertical: moderateScale(5),
          paddingBottom: moderateScale(8),
          backgroundColor: "black",
          

        },
        tabBarActiveTintColor: "#F6941D",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: moderateScale(5),
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <Ionicons name="time" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color }) => (
            <Ionicons name="mail" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
    </SafeAreaProvider>
  );
}
