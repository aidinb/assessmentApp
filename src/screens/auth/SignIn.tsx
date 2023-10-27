import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import SignInBanner from "../../assets/signInBanner.svg";
import Button from "../../components/Button";
import InputWithLabel from "../../components/InputWithLabel";
import { screenStyles } from "../../theme/globalStyles";

export function SignIn() {
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <View style={screenStyles.container}>
      {/* Create a scrollable view that handles keyboard interactions */}
      <KeyboardAwareScrollView
        style={screenStyles.container}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="none"
        showsVerticalScrollIndicator={false}
        extraScrollHeight={20}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 200,
        }}
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

      <View style={screenStyles.bottomButtons}>
        {/* "Sign in" button to navigate to the GradeSelection screen */}
        <Button
          onPress={() => navigation.push("GradeSelection")}
          title="Sign in"
        />
        <View
          style={{
            flexDirection: "row",
            width: 200,
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text>Dont have account?</Text>
          {/* "Sign Up" button to navigate to the SignUp screen */}
          <Button
            style={{ minWidth: 30, paddingHorizontal: 3 }}
            onPress={() => navigation.push("SignUp")}
            backgroundColor={false}
            title="Sign Up"
          />
        </View>
      </View>
    </View>
  );
}
