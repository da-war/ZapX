import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

interface Props {
  style?: any;
  children: React.ReactNode;
}

const ErrorText: React.FC<Props> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default ErrorText;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.light,
    color: COLORS.danger,
    fontSize: 8,
  },
});
