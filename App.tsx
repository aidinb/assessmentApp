import { Routes } from './src/routes';
import {colors} from "./src/theme/colors";
import {View} from "react-native";
import {
    useFonts,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
} from '@expo-google-fonts/inter';
import Loading from './src/components/Loading';

export default function App() {

    const [fontsLoaded,fontError] = useFonts({
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
    });
    console.log(fontError)

    if (!fontsLoaded) {
        return <Loading />;
    }
  return (
      <View style={{flex: 1}}>
        <Routes />
      </View>
  );
}
