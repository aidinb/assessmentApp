import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import WelcomeScreenBanner from "../../assets/welcomeScreenBanner.svg";
import AuthButton from "../../components/AuthButton";
import Footer from "../../components/Footer";
import { screenStyles, useAppTheme } from "../../theme/globalStyles";

export function WelcomeScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const theme = useAppTheme();

  return (
    <View style={[screenStyles.container, { alignItems: "center" }]}>
      {/* Render a banner image on the WelcomeScreen */}
      <WelcomeScreenBanner />

      <Text
        variant="headlineMedium"
        style={{ fontFamily: "Inter_600SemiBold" }}
      >
        Let's find the "A" with us
      </Text>

      <Text
        style={{
          color: theme.colors.grayText,
          marginTop: 10,
          fontFamily: "Inter_400Regular",
        }}
        variant="titleMedium"
      >
        Please Sign in to view personalized recommendations
      </Text>

      <Footer>
        {/* "Sign in" button to navigate to the SignIn screen */}
        <AuthButton onPress={() => navigation.push("SignIn")} title="Sign in" />
        {/* "Skip" button to navigate to the GradeSelection screen without signing in */}
        <AuthButton
          onPress={() => navigation.push("GradeSelection")}
          backgroundColor={false}
          title="Skip"
        />
      </Footer>
    </View>
  );
}
