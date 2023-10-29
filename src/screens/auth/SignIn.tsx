import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SignInBanner from "../../assets/signInBanner.svg";
import MyButton from "../../components/MyButton";
import InputWithLabel from "../../components/InputWithLabel";
import { screenStyles } from "../../theme/globalStyles";
import {StackNavigationProp} from "@react-navigation/stack";
import { Text } from 'react-native-paper';
import Footer from "../../components/Footer";

export function SignIn() {
    const navigation = useNavigation<StackNavigationProp<any>>()
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

      <Footer>
        {/* "Sign in" button to navigate to the GradeSelection screen */}
        <MyButton
          onPress={() => navigation.push("GradeSelection")}
          title="Sign in"
        />
        <View
          style={{
            flexDirection: "row",
           alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text>Dont have account?</Text>
          {/* "Sign Up" button to navigate to the SignUp screen */}
          <MyButton
            style={{ minWidth: 30,marginLeft:-18 }}
            onPress={() => navigation.push("SignUp")}
            backgroundColor={false}
            title="Sign Up"
          />
        </View>
      </Footer>
    </View>
  );
}
