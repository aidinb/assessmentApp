import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Text } from "react-native-paper";

import SignUpBanner from "../../assets/signUpBanner.svg";
import AuthButton from "../../components/AuthButton";
import Footer from "../../components/Footer";
import InputWithLabel from "../../components/InputWithLabel";
import { useKeyboard } from "../../hooks/useKeyboard";
import { screenStyles } from "../../theme/globalStyles";

export function SignUp() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [name, onChangeName] = useState("");
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
        <SignUpBanner />
        {/* Input fields for name, email, and password */}
        <InputWithLabel title="Name" onChangeText={onChangeName} value={name} />
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
          {/* "Sign up" button to navigate to the GradeSelection screen */}
          <AuthButton
            onPress={() => navigation.push("GradeSelection")}
            title="Sign up"
          />
          <View style={styles.footerContainer}>
            <Text style={{fontFamily:'Inter_400Regular'}}>You have an account?</Text>
            {/* "Sign in" button to navigate to the SignIn screen */}
            <AuthButton
              style={styles.authButton}
              onPress={() => navigation.push("SignIn")}
              backgroundColor={false}
              title="Sign in"
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
