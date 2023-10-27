import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { SignIn } from "../screens/auth/SignIn";
import { SignUp } from "../screens/auth/SignUp";
import { WelcomeScreen } from "../screens/auth/WelcomeScreen";
import { GradeSelection } from "../screens/userInformation/GradeSelection";
import { ProvinceSelection } from "../screens/userInformation/ProvinceSelection";

// Define the route types for the AuthRoutes
type AuthRoutesTypes = {
  WelcomeScreen: undefined;
  SignIn: undefined;
  SignUp: undefined;
  GradeSelection: undefined;
  ProvinceSelection: undefined;
};

// Create a stack navigator
const Stack = createNativeStackNavigator<AuthRoutesTypes>();

export function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ title: "Welcome Screen" }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Sign In" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Sign Up" }}
      />
      <Stack.Screen
        name="GradeSelection"
        component={GradeSelection}
        options={{ title: "Grade Selection" }}
      />
      <Stack.Screen
        name="ProvinceSelection"
        component={ProvinceSelection}
        options={{ title: "Province Selection" }}
      />
    </Stack.Navigator>
  );
}
