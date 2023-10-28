import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

import WelcomeScreenBanner from "../../assets/welcomeScreenBanner.svg";
import {screenStyles, typography, useAppTheme} from "../../theme/globalStyles";
import {StackNavigationProp} from "@react-navigation/stack";
import MyButton from "../../components/MyButton";
import { Text } from 'react-native-paper';
import Footer from "../../components/Footer";

export function WelcomeScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>()
    const theme  = useAppTheme();

  return (
    <View style={[screenStyles.container, { alignItems: "center" }]}>
      {/* Render a banner image on the WelcomeScreen */}
      <WelcomeScreenBanner />

      <Text variant="headlineMedium">Let's find the "A" with us</Text>

      <Text style={typography.subTitle} variant="titleMedium">
        Please Sign in to view personalized recommendations
      </Text>

     <Footer>
        {/* "Sign in" button to navigate to the SignIn screen */}
        <MyButton onPress={() => navigation.push("SignIn")} title="Sign in" />
        {/* "Skip" button to navigate to the GradeSelection screen without signing in */}
        <MyButton
          onPress={() => navigation.push("GradeSelection")}
          backgroundColor={false}
          title="Skip"
        />
     </Footer>
    </View>
  );
}
