import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import {colors} from "./src/theme/colors";
import {View} from "react-native";

export default function App() {

  return (
      <View style={{flex: 1}}>
        <Routes />
        <StatusBar style="light" backgroundColor={colors.primary} translucent />
      </View>
  );
}
