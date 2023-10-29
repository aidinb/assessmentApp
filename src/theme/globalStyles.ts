// Import necessary modules and components
import { DefaultTheme } from "@react-navigation/native";
import { Platform, StyleSheet } from "react-native";
import { MD3LightTheme, useTheme } from "react-native-paper";

import { colors } from "./colors";

// Define styles for forms
export const formStyles = StyleSheet.create({
  inputWrapper: {
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  input: {
    width: Platform.OS === "web" ? 400 : "95%",
    minWidth: Platform.OS === "web" ? 400 : "90%",
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    minHeight: 50,
    shadowOpacity: 0.3,
    shadowColor: colors.shadow,
    shadowRadius: 3,
    elevation: 7, // Android-specific elevation for a shadow effect
  },
});

// Define styles for screens
export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// Define a custom navigation theme by extending the default theme
export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.secondary,
  },
};

export const theme = {
  ...MD3LightTheme, // or MD2DarkTheme

  // Specify a custom property
  myOwnProperty: true,

  colors,
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
