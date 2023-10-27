import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

import WelcomeScreenBanner from "../../assets/welcomeScreenBanner.svg";
import Button from "../../components/Button";
import { screenStyles, typography } from "../../theme/globalStyles";
import {StackNavigationProp} from "@react-navigation/stack";

export function WelcomeScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>()

  return (
    <View style={[screenStyles.container, { alignItems: "center" }]}>
      {/* Render a banner image on the WelcomeScreen */}
      <WelcomeScreenBanner />

      <Text style={typography.title}>Let's find the "A" with us</Text>

      <Text style={typography.subTitle}>
        Please Sign in to view personalized recommendations
      </Text>

      <View style={screenStyles.bottomButtons}>
        {/* "Sign in" button to navigate to the SignIn screen */}
        <Button onPress={() => navigation.push("SignIn")} title="Sign in" />
        {/* "Skip" button to navigate to the GradeSelection screen without signing in */}
        <Button
          onPress={() => navigation.push("GradeSelection")}
          backgroundColor={false}
          title="Skip"
        />
      </View>
    </View>
  );
}
