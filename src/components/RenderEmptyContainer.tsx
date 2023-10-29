import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

// Define the Loading component, which displays an activity indicator while loading.
const RenderEmptyContainer: React.FC = () => {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text variant="bodyMedium">No Result.</Text>
    </View>
  );
};
// Export the Loading component as the default export of this module.
export default RenderEmptyContainer;
