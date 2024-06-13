import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import { SplashScreen, Stack } from "expo-router";

import { useFonts } from "expo-font";

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    EncodeSansBold: require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    EncodeSansLight: require("../assets/fonts/Poppins-Light.ttf"),
    EncodeSansMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    EncodeSansRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    EncodeSansSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
