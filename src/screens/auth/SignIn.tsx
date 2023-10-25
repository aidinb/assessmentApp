import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import {formStyles, screenStyles, typography} from "../../theme/globalStyles";
import SignInBanner from "../../assets/signInBanner.svg";
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import {colors} from "../../theme/colors";

export function SignIn() {
    const navigation = useNavigation();
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={screenStyles.container}
        >
        <View style={screenStyles.centerContainer}>
          <SignInBanner/>
        </View>

            <View style={formStyles.inputWrapper}>
                <Text style={formStyles.label}>
                    Email address
                </Text>


                <TextInput
                    style={formStyles.input}
                    onChangeText={onChangeEmail}
                    keyboardType="email-address"
                    placeholder="E-mail"
                    value={email}
                />
            </View>

            <View style={formStyles.inputWrapper}>
                <Text style={formStyles.label}>
                    Password
                </Text>


                <TextInput
                    style={formStyles.input}
                    onChangeText={onChangePassword}
                    placeholder="Password"
                    value={password}
                    secureTextEntry={true}
                />
            </View>



        <View style={[screenStyles.centerContainer,{position:'absolute',bottom:70,height:130,justifyContent: 'space-between',}]}>
          <Button onPress={()=>navigation.push('SignUp')} title={'Sign in'}/>
          <Button backgroundColor={false} title={'Dont have account? Sign Up'}/>
        </View>


        </KeyboardAvoidingView>
  );
}

