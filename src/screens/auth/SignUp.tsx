import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import SignUpBanner from "../../assets/signUpBanner.svg";
import Button from "../../components/Button";
import InputWithLabel from "../../components/InputWithLabel";
import { screenStyles } from "../../theme/globalStyles";
import {StackNavigationProp} from "@react-navigation/stack";

export function SignUp() {
    const navigation = useNavigation<StackNavigationProp<any>>()
  const [name, onChangeName] = useState("");
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

      <View style={screenStyles.bottomButtons}>
        {/* "Sign up" button to navigate to the GradeSelection screen */}
        <Button
          onPress={() => navigation.push("GradeSelection")}
          title="Sign up"
        />
        <View
          style={{
            flexDirection: "row",
            width: 200,
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text>You have an account?</Text>
          {/* "Sign in" button to navigate to the SignIn screen */}
          <Button
            style={{ minWidth: 30, paddingHorizontal: 3 }}
            onPress={() => navigation.push("SignIn")}
            backgroundColor={false}
            title="Sign in"
          />
        </View>
      </View>
    </View>
  );
}
