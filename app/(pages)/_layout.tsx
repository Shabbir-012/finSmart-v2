import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="creditCard" />
      <Stack.Screen name="airTicket" />
      <Stack.Screen name="ekycForm" />
      <Stack.Screen name="emiCalculator" />
    </Stack>
  );
};

export default Layout;