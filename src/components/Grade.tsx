import React from "react";
import { StyleSheet, View } from "react-native";

import Picker from "./Picker";
import PickerItem from "./PickerItem";

// Define the properties that can be passed to the Grade component.
interface GradeProps {
  selectedGrade: string; // The currently selected grade.
  setSelectedGrade: (grade: string) => void; // Function to set the selected grade.
  title: string; // The title of the grade picker.
  items: { id: number; name: string; icon: () => React.JSX.Element }[]; // An array of grade options.
}

// Define the Grade component as a React functional component.
const Grade: React.FC<GradeProps> = ({
  selectedGrade,
  setSelectedGrade,
  title,
  items = [],
}: GradeProps) => {
  return (
    // Render the Grade component within a Picker component, specifying the title and animation size.
    <Picker title={title} animationSize={items.length * 30}>
      <View style={styles.containerStyle}>
        {items.length > 0
          ? items.map((item) => (
              <PickerItem
                key={"GradeItem_" + item.id}
                selected={selectedGrade === item.name}
                onPress={() => setSelectedGrade(item.name)}
                icon={item.icon}
                title={item.name}
              />
            ))
          : null}
      </View>
    </Picker>
  );
};

// Define the styles for the Grade component.
const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: -10,
  },
});

// Export the Grade component as the default export of this module.
export default Grade;
