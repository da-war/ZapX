import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

import * as Animatable from "react-native-animatable";
import { COLORS, FONTS } from "@/constants/theme";
import AppButton from "@/components/AppButton";

const index = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Animatable.Text style={styles.text} animation="zoomInUp">
          Welcome to ZapX
        </Animatable.Text>
        <Animatable.Text style={styles.text2} animation="lightSpeedIn">
          Choose how you want to continue
        </Animatable.Text>
      </View>

      <Animatable.View
        duration={4000}
        animation="bounceIn"
        style={styles.absolute}
      >
        <AppButton
          title="I'm a New User"
          onPress={() => router.push("register")}
          style={{ borderColor: COLORS.primary }}
          color={COLORS.white}
          textStyle={{ color: COLORS.primary }}
        />
        <AppButton
          title="Sign In"
          onPress={() => router.push("login")}
          style={{ marginBottom: 10 }}
        />
      </Animatable.View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: FONTS.bold,
  },
  topContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
  absolute: {
    position: "absolute",
    bottom: 35,
    width: "100%",
    paddingHorizontal: 20,
  },
});
