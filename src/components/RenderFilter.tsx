import React from "react";
import { Animated, View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

import { colors } from "../theme/colors";
import { useAppTheme } from "../theme/globalStyles";

// Define the properties that can be passed to the RenderFilter component.
interface RenderFilterProps {
  title: string; // The title for the filter section.
  items: string[]; // An array of filter items to be displayed.
  onPress: (item: string) => void; // Function to handle item selection.
  selected: string | null; // The currently selected filter item (if any).
}

// Define the RenderFilter component as a React functional component.
const RenderFilter: React.FC<RenderFilterProps> = ({
  title,
  items,
  onPress,
  selected,
}: RenderFilterProps) => {
  const theme = useAppTheme();

  return (
    <Animated.View style={styles.container}>
      <Text variant="titleMedium" style={{ color: theme.colors.subTitle }}>
        {title}
      </Text>
      <View style={styles.itemsContainer}>
        {items.length > 0
          ? items.map((item) => (
              <Button
                key={item}
                mode="contained"
                buttonColor={selected === item ? colors.primary : colors.white}
                textColor={selected === item ? colors.white : colors.black}
                onPress={() => onPress(item)}
                labelStyle={{ marginHorizontal: 10 }}
                contentStyle={{
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                style={[
                  styles.item,
                  {
                    backgroundColor:
                      selected === item ? colors.primary : colors.white,
                  },
                ]}
              >
                {item}
              </Button>
            ))
          : null}
      </View>
    </Animated.View>
  );
};

// Define the styles for the RenderFilter component.
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 10,
  },
  itemsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 5,
  },
  item: {
    marginTop: 10,
    borderRadius: 9,
    marginRight: 10,
  },
});

// Export the RenderFilter component as the default export of this module.
export default RenderFilter;
