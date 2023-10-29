import React from "react";
import { ActivityIndicator } from "react-native-paper";

import { useAppTheme } from "../theme/globalStyles";

// Define the Loading component, which displays an activity indicator while loading.
const Loading: React.FC = () => {
  const theme = useAppTheme();
  return <ActivityIndicator color={theme.colors.primary} />;
};
// Export the Loading component as the default export of this module.
export default Loading;
