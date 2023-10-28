// Import necessary modules and components
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  NativeModules,
  StyleSheet,
  Platform,
} from "react-native";

import MyButton from "../../components/MyButton";
import PickerItem from "../../components/PickerItem";
import { colors } from "../../theme/colors";
import {screenStyles, typography, useAppTheme} from "../../theme/globalStyles";
import { sriLanka } from "../../utils/data";
import { Text } from 'react-native-paper';
import Footer from "../../components/Footer";

// Define the ProvinceSelection component
export function ProvinceSelection() {
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const theme  = useAppTheme();

  /*
   * Note that this should be fixed after the real authentication system implemented
   * */
  // Function to save user data and trigger a reload
  const saveUser = async () => {
    try {
      // Save user data to AsyncStorage
      await AsyncStorage.setItem("user", "test");

      // Reload the application based on the platform
      if (Platform.OS === "web") {
        // Reload the web application
        location.reload();
      } else {
        // Reload the mobile application
        NativeModules.DevSettings.reload();
      }
    } catch (err) {
      console.log("saveUser error", err);
      // Handle error, possibly send it to analytics
    }
  };

  // Render the component
  return (
    <View style={screenStyles.container}>
      <Text variant={'headlineMedium'} style={styles.title}>What's your province?</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.provinceContainer}>
          <Text variant={'titleLarge'} style={{color: colors.subTitle}}>
            Provinces of Sri Lanka
          </Text>
          <View style={styles.provinceList}>
            {sriLanka.length > 0
              ? sriLanka.map((item) => {
                  const name = item.name;
                  return (
                    <PickerItem
                      key={name}
                      selected={selectedProvince === name}
                      onPress={() => setSelectedProvince(name)}
                      title={name}
                    />
                  );
                })
              : null}
          </View>
        </View>
      </ScrollView>
      <Footer>
        <MyButton onPress={saveUser} title="Next" />
        <MyButton onPress={saveUser} backgroundColor={false} title="Skip" />
      </Footer>
    </View>
  );
}

// Define styles for the component
const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 15,
  },
  scrollViewContent: {
    paddingBottom: 200,
  },
  provinceContainer: {
    width: "90%",
    minHeight: 60,
    backgroundColor: colors.gray,
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 10,
  },
  provinceList: {
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 10,
  },
});
