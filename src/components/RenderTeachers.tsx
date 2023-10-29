import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

import { theme } from "../theme/globalStyles";

// Define the properties that can be passed to the RenderTeachers component.
interface RenderTeachersProps {
  item: {
    image: string; // URL or path to the teacher's image.
    name: string; // The name of the teacher.
    field: string; // The field or subject taught by the teacher.
  };
  onPress: () => void; // Function to handle the press event on the teacher item.
}

// Define the RenderTeachers component as a React functional component.
const RenderTeachers: React.FC<RenderTeachersProps> = React.memo(
  ({ item, onPress }: RenderTeachersProps) => {
    // Wrap the onPress function with useCallback
    const memoizedOnPress = useCallback(() => {
      onPress();
    }, [onPress]);

    return (
      <Card onPress={memoizedOnPress} style={styles.container}>
        <Card.Cover
          // @ts-ignore
          source={item.image}
          style={styles.image}
        />
        <Card.Content>
          <Text numberOfLines={1} variant="labelLarge">
            {item.name}
          </Text>
          <Text variant="bodyMedium" style={{ color: theme.colors.grayText }}>
            {item.field}
          </Text>
        </Card.Content>
      </Card>
    );
  },
);

// Define the styles for the RenderTeachers component.
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    backgroundColor: theme.colors.white,
    padding: 10,
    justifyContent: "center",
    width: 130,
    height: 180,
    paddingHorizontal: 0,
  },
  image: {
    width: 110,
    height: 115,
    marginBottom: 10,
    alignSelf: "center",
  },
});

// Export the RenderTeachers component as the default export of this module.
export default RenderTeachers;
