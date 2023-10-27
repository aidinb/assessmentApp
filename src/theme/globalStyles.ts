// Import necessary modules and components
import { DefaultTheme } from "@react-navigation/native";
import { Dimensions, Platform, StyleSheet } from "react-native";

import { colors } from "./colors";

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
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: colors.black,
    marginLeft: 8,
    marginBottom: 10,
  },
  inputWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  input: {
    width: Platform.OS === "web" ? 500 : "95%",
    minWidth: Platform.OS === "web" ? 500 : "80%",
    alignSelf: "center",
    backgroundColor: colors.white,
    height: 50,
    borderRadius: 8,
    paddingLeft: 10,
    shadowOffset: {
      width: 1,
      height: 2,
    },
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
  bottomButtons: {
    position: "absolute",
    bottom: 0,
    height: 160,
    justifyContent: "space-between",
    width,
    alignItems: "center",
    backgroundColor: colors.secondary,
    paddingVertical: 15,
    paddingBottom: 50,
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
