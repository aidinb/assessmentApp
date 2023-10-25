import React, {useState} from 'react';
import {
    FlatList,
    ScrollView,
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity, Platform,KeyboardAvoidingView
} from 'react-native';
import {screenStyles, typography} from "../../theme/globalStyles";
import SignUpBanner from "../../assets/signUpBanner.svg";
import Button from "../../components/Button";
import InputWithLabel from "../../components/InputWithLabel";

export function SignUp() {
    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [pasword, onChangePassword] = useState('');

    return (
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={screenStyles.container}
      >
        <View style={screenStyles.centerContainer}>
          <SignUpBanner/>
        </View>

          <InputWithLabel title='Name' onChangeText={onChangeName} value={name}/>
          <InputWithLabel title='Email' onChangeText={onChangeEmail} value={email}/>
          <InputWithLabel title='Password' onChangeText={onChangePassword} value={pasword} secureKeyboard/>


        <View style={[screenStyles.centerContainer,{position:'absolute',bottom:70,height:130,justifyContent: 'space-between',}]}>
          <Button onPress={()=>alert('s')} title={'Sign up'}/>
          <Button backgroundColor={false} title={'You have account? Sign in'}/>
        </View>


      </KeyboardAvoidingView>
  );
}

