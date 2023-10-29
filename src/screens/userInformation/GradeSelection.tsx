// Import required modules and components
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import Arts from "../../assets/arts.svg"; // Import Arts SVG
import CommerceIcon from "../../assets/commerceIcon.svg"; // Import CommerceIcon SVG
import MathsIcon from "../../assets/mathsIcon.svg"; // Import MathsIcon SVG
import ScienceIcon from "../../assets/scienceIcon.svg"; // Import ScienceIcon SVG
import Footer from "../../components/Footer";
import Grade from "../../components/Grade"; // Import Grade component
import MyButton from "../../components/MyButton"; // Import MyButton component
import { screenStyles } from "../../theme/globalStyles"; // Import global styles

// Define an interface for a GradeItem
interface GradeItem {
  id: number;
  name: string;
  icon: () => React.JSX.Element;
}

// Define the GradeSelection component
export function GradeSelection() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  // Define state variables to track selected grades
  const [selectedGrade1To5, setSelectedGrade1To5] = useState<string>("");
  const [selectedGrade6To9, setSelectedGrade6To9] = useState<string>("");
  const [selectedGrade10To11, setSelectedGrade10To11] = useState<string>("");
  const [selectedGrade12To13, setSelectedGrade12To13] = useState<string>("");

  // Define GradeItem arrays for different grade ranges
  const Grade1To5Items: GradeItem[] = [
    { id: 1, name: "Arts", icon: () => <Arts /> },
    { id: 2, name: "Science", icon: () => <ScienceIcon /> },
    { id: 3, name: "Maths", icon: () => <MathsIcon /> },
    { id: 4, name: "Commerce", icon: () => <CommerceIcon /> },
  ];

  const Grade6To9Items: GradeItem[] = [
    { id: 5, name: "Arts", icon: () => <Arts /> },
    { id: 6, name: "Science", icon: () => <ScienceIcon /> },
  ];

  const Grade10To11Items: GradeItem[] = [
    { id: 7, name: "Maths", icon: () => <MathsIcon /> },
    { id: 8, name: "Commerce", icon: () => <CommerceIcon /> },
  ];

  const Grade12To13Items: GradeItem[] = [
    { id: 9, name: "Arts", icon: () => <Arts /> },
    { id: 10, name: "Science", icon: () => <ScienceIcon /> },
    { id: 11, name: "Maths", icon: () => <MathsIcon /> },
    { id: 12, name: "Commerce", icon: () => <CommerceIcon /> },
  ];

  // Render the component
  // @ts-ignore
  // @ts-ignore
  return (
    <View style={screenStyles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        What's your grade?
      </Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Render Grade components for different grade ranges */}
        <Grade
          title="Grade 1-5"
          items={Grade1To5Items}
          selectedGrade={selectedGrade1To5}
          setSelectedGrade={setSelectedGrade1To5}
        />

        <Grade
          title="Grade 6-9"
          items={Grade6To9Items}
          selectedGrade={selectedGrade6To9}
          setSelectedGrade={setSelectedGrade6To9}
        />

        <Grade
          title="Grade 10-11"
          items={Grade10To11Items}
          selectedGrade={selectedGrade10To11}
          setSelectedGrade={setSelectedGrade10To11}
        />

        <Grade
          title="Grade 12-13"
          items={Grade12To13Items}
          selectedGrade={selectedGrade12To13}
          setSelectedGrade={setSelectedGrade12To13}
        />
      </ScrollView>

      {/* Render navigation buttons */}
      <Footer>
        <MyButton
          onPress={() => navigation.push("ProvinceSelection")}
          title="Next"
        />
        <MyButton
          onPress={() => navigation.push("ProvinceSelection")}
          backgroundColor={false}
          title="Skip"
        />
      </Footer>
    </View>
  );
}

// Define styles for the component
const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 10,
  },
  scrollViewContent: {
    paddingBottom: 200,
  },
});
