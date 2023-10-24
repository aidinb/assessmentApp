import React from 'react';
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {screenStyles, typography} from "../../theme/globalStyles";
import SignInBanner from "../../assets/signInBanner.svg";
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
    const navigation = useNavigation();

    return (
      <View style={screenStyles.container}>
        <View style={screenStyles.centerContainer}>
          <SignInBanner/>
        </View>



        <View style={[screenStyles.centerContainer,{position:'absolute',bottom:70,height:130,justifyContent: 'space-between',}]}>
          <Button onPress={()=>navigation.push('SignUp')} title={'Sign in'}/>
          <Button backgroundColor={false} title={'Dont have account? Sign Up'}/>
        </View>


      </View>
  );
}

