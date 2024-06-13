import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "@/components/form";
import { SafeAreaView } from "react-native-safe-area-context";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Login = () => {
  return (
    <SafeAreaView>
      <Text>login</Text>
      <Text onPress={() => router.push("/home")}>Go to App</Text>
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: object) => console.log(values)}
      >
        <AppFormField
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Login" color="primary" textColor="white" />
      </AppForm>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
