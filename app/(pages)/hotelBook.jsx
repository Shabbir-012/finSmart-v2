import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import InputField from "../../components/Input/InputField";
import SearchIcon from "../../components/SvgIcon/SearchIcon";
import CalenderIcon from "../../components/SvgIcon/CalenderIcon";
import DatePicker from "react-native-date-ranges";

const HotelBook = () => {
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#73E49A",
          // height: 80,
          flexDirection: "row",
          paddingTop: 25,
          gap: 125,
          paddingLeft: 20,
          justifyContent: "center",
        }}
      >
        <Image source={require("../../assets/images/bg2.jpg")} />
      </KeyboardAvoidingView>
      <View
        style={{
          flex: 3,
          backgroundColor: "#fff",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <Text
          style={{
            paddingTop: 30,
            paddingLeft: 50,
            fontWeight: "500",
            fontSize: 18,
          }}
        >
          Find Hotel
        </Text>
        <Text
          style={{
            paddingTop: 10,
            paddingLeft: 50,
            fontWeight: "300",
            fontSize: 15,
          }}
        >
          Find the best hotel as your requirement easily
        </Text>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled={true} // Allow nested scrolling
        >
          <View>
            {/* <InputField
              label="Distination"
              placeholder="Enter your destination"
              // inputStyle={styles.input}
              labelStyle={styles.labelStyle}
              container={styles.container}
              IconComponent={SearchIcon}
            //   onChangeText={setSearch}
            />
            <InputField
              label="Select Date"
              placeholder="Pick Date"
              // inputStyle={styles.input}
              labelStyle={styles.labelStyle}
              container={styles.container}
              IconComponent={CalenderIcon}
            //   onChangeText={setSearch}
            />
            <InputField
              label="Select Date"
              placeholder="Pick Date"
              // inputStyle={styles.input}
              labelStyle={styles.labelStyle}
              container={styles.container}
              IconComponent={CalenderIcon}
            //   onChangeText={setSearch}
            /> */}

            <Pressable
              onPress={() => navigation.navigate("Search")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <SearchIcon />
              <TextInput
                placeholderTextColor="black"
                placeholder="Enter Your Destination"
              />
            </Pressable>


            <Pressable
              onPress={() => navigation.navigate("Search")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <SearchIcon />
              <TextInput
                placeholderTextColor="black"
                placeholder="Enter Your Destination"
              />
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(196, 196, 196, 0.00)",

    // marginTop: 10,
    width: 300,
    height: 80,
  },
  labelStyle: {
    fontWeight: "bold",
    paddingBottom: 10,
  },
  container: {
    paddingTop: 10,
    // paddingLeft: 30,
  },
});

export default HotelBook;
