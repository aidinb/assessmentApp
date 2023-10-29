import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Text } from "react-native-paper";

import SignInBanner from "../../assets/signInBanner.svg";
import AuthButton from "../../components/AuthButton";
import Footer from "../../components/Footer";
import InputWithLabel from "../../components/InputWithLabel";
import { useKeyboard } from "../../hooks/useKeyboard";
import { screenStyles } from "../../theme/globalStyles";

export function SignIn() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const keyboardHook = useKeyboard();

  return (
    <View style={screenStyles.container}>
      {/* Create a scrollable view that handles keyboard interactions */}
      <KeyboardAwareScrollView
        style={screenStyles.container}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="none"
        showsVerticalScrollIndicator={false}
        extraScrollHeight={20}
        contentContainerStyle={styles.scrollContent}
      >
        <SignInBanner />
        {/* Input fields for email and password */}
        <InputWithLabel
          title="Email"
          onChangeText={onChangeEmail}
          value={email}
        />
        <InputWithLabel
          title="Password"
          onChangeText={onChangePassword}
          value={password}
          secureKeyboard
        />
      </KeyboardAwareScrollView>

      {!keyboardHook.keyboardShown ? (
        <Footer>
          {/* "Sign in" button to navigate to the GradeSelection screen */}
          <AuthButton
            onPress={() => navigation.push("GradeSelection")}
            title="Sign in"
          />
          <View style={styles.footerContainer}>
            <Text style={{fontFamily:'Inter_400Regular'}}>Dont have account?</Text>
            {/* "Sign Up" button to navigate to the SignUp screen */}
            <AuthButton
              style={styles.authButton}
              onPress={() => navigation.push("SignUp")}
              backgroundColor={false}
              title="Sign Up"
            />
          </View>
        </Footer>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 200,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  authButton: { minWidth: 30, marginLeft: -18 },
});
