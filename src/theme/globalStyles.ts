// Import necessary modules and components
import { DefaultTheme } from "@react-navigation/native";
import { Dimensions, Platform, StyleSheet } from "react-native";

import { colors } from "./colors";
import { MD3LightTheme, useTheme} from "react-native-paper";

// Import the default theme from React Navigation

// Get the width of the device's screen
const { width } = Dimensions.get("window");

// Define styles for typography
export const typography = StyleSheet.create({
  h1: {
    fontSize: 28,
  },
  h2: {
    fontSize: 20,
    color: colors.subTitle,
    fontFamily: "Inter_600SemiBold",
  },
  h3: {
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
  },
  h4: {
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
  },
  paragraph: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: colors.black,
    marginTop: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    color: colors.black,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 18,
    fontFamily: "Inter_400Regular",
    color: colors.subTitle,
    textAlign: "center",
    marginTop: 15,
  },
});

// Define styles for forms
export const formStyles = StyleSheet.create({
  label: {
    marginLeft: 8,
    marginBottom: 10,
  },
  inputWrapper: {
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  input: {
    width: Platform.OS === "web" ? 500 : "95%",
    minWidth: Platform.OS === "web" ? 500 : "90%",
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    minHeight:50,
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
  centerContainer: {
    width,
    alignItems: "center",
    justifyContent: "center",
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

  colors: colors,
}

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

