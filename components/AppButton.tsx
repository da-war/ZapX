import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "@/constants/theme";

interface Props {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
  disabled?: boolean;
  color?: string;
}

const AppButton: React.FC<Props> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled,
  color = COLORS.primary,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.mainContainer,
        disabled ? { opacity: 0.5 } : {},
        { backgroundColor: color },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginVertical: 7,
    borderRadius: 12,
  },
  title: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
});
