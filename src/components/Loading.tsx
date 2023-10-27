import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

import { colors } from "../theme/colors";

// Define the Loading component, which displays an activity indicator while loading.
const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Display an ActivityIndicator with a primary color. */}
      <ActivityIndicator color={colors.primary} />
    </View>
  );
};

// Define the styles for the Loading component.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.transparent, // Set the background color to a transparent color.
  },
});

// Export the Loading component as the default export of this module.
export default Loading;
