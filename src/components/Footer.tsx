// Import necessary modules and dependencies from React and React Native
import React from "react";
import { StyleSheet, View } from "react-native";

import { theme } from "../theme/globalStyles";

// Define the properties that the Footer component expects
interface FooterProps {
  children: React.ReactNode;
}

// Create a functional React component called Footer
const Footer: React.FC<FooterProps> = ({ children }: FooterProps) => {
  return (
    // Render a View component with specified styles to create the footer
    <View style={styles.container}>{children}</View>
  );
};

// Define the styles for the Footer component using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    // Position the footer at the bottom of the screen
    position: "absolute",
    bottom: 0,
    // Set a fixed height for the footer
    height: 160,
    // Distribute contents evenly along the main axis (vertical)
    justifyContent: "space-between",
    // Take up the full width of the parent container
    width: "100%",
    // Center the contents along the horizontal axis
    alignItems: "center",
    // Set the background color using a color defined in the theme
    backgroundColor: theme.colors.secondary,
    // Add padding to the top and bottom of the footer
    paddingVertical: 15,
    paddingBottom: 50,
    // Allow the container to expand to fill available space
    flex: 1,
  },
});

// Export the Footer component to make it available for use in other parts of the application
export default Footer;
