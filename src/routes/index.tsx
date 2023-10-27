import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { AuthRoutes } from "./AuthRoutes";
import { DashboardRoutes } from "./DashboardRoutes";
import { useAuthenticate } from "../hooks/useAuthenticate";
import { NavigationTheme } from "../theme/globalStyles";

// Define the top-level routing component.
export function Routes() {
  /*
   * Note that this should be fixed after the real authentication system implemented
   * */

  // Check if the user is authenticated using a custom hook.
  const isAuthenticated = useAuthenticate();

  return (
    <NavigationContainer theme={NavigationTheme}>
      {isAuthenticated ? <DashboardRoutes /> : <AuthRoutes />}
      {/* Render the DashboardRoutes if the user is authenticated, otherwise render the AuthRoutes. */}
    </NavigationContainer>
  );
}
