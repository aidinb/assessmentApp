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
import SignUpBanner from "../../assets/signUpBanner.svg";
import Button from "../../components/Button";

export function SignUp() {
  return (
      <View style={screenStyles.container}>
        <View style={screenStyles.centerContainer}>
          <SignUpBanner/>
        </View>



        <View style={[screenStyles.centerContainer,{position:'absolute',bottom:70,height:130,justifyContent: 'space-between',}]}>
          <Button onPress={()=>alert('s')} title={'Sign up'}/>
          <Button backgroundColor={false} title={'You have account? Sign in'}/>
        </View>


      </View>
  );
}

