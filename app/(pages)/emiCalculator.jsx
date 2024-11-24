import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Alert, StyleSheet, TextInput } from "react-native";
import { View, Text } from "react-native";

import CustomButton from "../../components/Button/CustomButton";
import InputField from "../../components/Input/InputField";

export default function EmiCalculator() {
  const [loan, setLoan] = useState();
  const [interestRate, setInterestRate] = useState();
  const [period, setPeriod] = useState();
  const [emi, setEmi] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateEmi = () => {
    const p = Number(loan);
    const annualRate = Number(interestRate);
    const loanYear = Number(period);

    const r = annualRate / (12 * 100);
    const n = loanYear * 12;

    if (p > 0 && r > 0 && n > 0) {
      const emiCalculated =
        (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

      const totalPaymentCalculated = emiCalculated * n;
      const totalInterestCalculated = totalPaymentCalculated - p;

      setEmi(emiCalculated.toFixed(2));
      setTotalPayment(totalPaymentCalculated.toFixed(2));
      setTotalInterest(totalInterestCalculated.toFixed(2));
    } else {
      Alert.alert("Invalid Input", "Please enter valid values for all fields.");
    }
  };

  return (
    <View
      style={{
        marginTop: 31,
        // marginLeft: 12,
      }}
    >
      <Text
        style={{
          marginTop: 50,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        EMI Calculation
      </Text>

      {/* upper content */}

      <View>
        <LinearGradient colors={["#73E49A", "#128238"]} style={styles.content}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 15,
            }}
          >
            Monthly Instalment
          </Text>
          <Text
            style={{
              color: "#EE5757",
              textAlign: "center",
              fontSize: 22,
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            {Math.round(emi)} BDT
          </Text>

          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              marginTop: 15,
            }}
          >
            Total Payment: {Math.round(totalPayment)} BDT
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              marginTop: 15,
            }}
          >
            Total interest: {Math.round(totalInterest)} BDT
          </Text>
        </LinearGradient>
      </View>

      <InputField
        label="Loan Amount:"
        placeholder="Enter the Loan Amount"
        value={loan}
        onChangeText={setLoan}
        container={styles.container}
        inputStyle={styles.input}
        labelStyle = {styles.labelStyle}
      />
      <InputField
        label="Interest Rate (%):"
        placeholder="Enter the interest rate"
        value={interestRate}
        onChangeText={setInterestRate}
        container={styles.container}
        inputStyle={styles.input}
        labelStyle = {styles.labelStyle}
      />
      <InputField
        label="Loan Period:"
        placeholder="Enter the loan period"
        value={period}
        onChangeText={setPeriod}
        container={styles.container}
        inputStyle={styles.input}
        labelStyle = {styles.labelStyle}
      />

      <CustomButton
        title="Calculate"
        onPress={calculateEmi}
        textStyle={styles.textStyle}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 15,
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 50,
    width: 313,
    height: 200,
  },
  button: {
    padding: 15,
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 30,
    width: 313,
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(196, 196, 196, 0.00)",
    padding: 10,
    // marginTop: 10,
    width: 195,
    height: 40,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
    marginTop: 15,
    // marginLeft: 20,
  },
  labelStyle:{
    fontWeight: "bold",
  }
});
