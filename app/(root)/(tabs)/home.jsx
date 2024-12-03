import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CreditCard from "../../../components/SvgIcon/CreditCard";
import TopBar from "../../../components/TopBar/TopBar";
import AirTicket from "../../../components/SvgIcon/AirTicket";
import EkycForm from "../../../components/SvgIcon/EkycForm";
import EmiCalculator from "../../../components/SvgIcon/EmiCalculator";
import ServiceCard from "../../../components/Cards/ServiceCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const checkLoginAndNavigate = async (page) => {
    const accessToken = await AsyncStorage.getItem("accessToken");

    if (accessToken) {
      router.push(`/${page}`);
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <SafeAreaView style={{ marginTop: 20 }}>
      <StatusBar style="dark" />

      <TopBar />

      <Text style={{ fontSize: 15, fontWeight: "400", marginTop: 10 }}>
        Services
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          gap: 5,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <ServiceCard
          IconComponent={CreditCard}
          title={"Credit Card"}
          onPress={() => checkLoginAndNavigate("creditCard")}
        />
        <ServiceCard
          IconComponent={EmiCalculator}
          title={"Emi Calculator"}
          onPress={() => router.push("/emiCalculator")}
        />
        <ServiceCard
          IconComponent={EkycForm}
          title={"Ekyc Form"}
          onPress={() => router.push("/ekycForm")}
        />
        <ServiceCard
          IconComponent={AirTicket}
          title={"Air Ticket"}
          onPress={() => router.push("/airTicket")}
        />

        <ServiceCard
          IconComponent={EmiCalculator}
          title={"Hotel Booking"}
          onPress={() => router.push("/hotelBook")}
        />
        <ServiceCard IconComponent={EkycForm} title={"Ekyc Form"} />
        <ServiceCard IconComponent={AirTicket} title={"Air Ticket"} />
        <ServiceCard IconComponent={CreditCard} title={"Credit Card"} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
