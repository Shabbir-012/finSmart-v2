import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../../store/store";

const Layout = () => {
  return (
    <Provider store={store}>
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="creditCard" />
      <Stack.Screen name="airTicket" />
      <Stack.Screen name="ekycForm" />
      <Stack.Screen name="emiCalculator" />
    </Stack>
    </Provider>
  );
};

export default Layout;