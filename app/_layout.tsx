// App/ _layout.tsx

import { Stack } from "expo-router";
import { Provider } from "react-redux"; // Import the Provider
import store from '../store/store'


export default function RootLayout() {
  return (
    
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(root)" />
      
      


    </Stack>
    
  );
}
