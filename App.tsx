import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { PaperProvider } from "react-native-paper";

import Loading from "./src/components/Loading";
import { Routes } from "./src/routes";
import { theme } from "./src/theme/globalStyles";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });
  console.log(fontError);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}
