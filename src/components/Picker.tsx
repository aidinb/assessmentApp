import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import { Button } from "react-native-paper";

import useFadeAnimation from "../hooks/useFadeAnimation";
import { colors } from "../theme/colors";
import { useAppTheme } from "../theme/globalStyles";

// Define the properties that can be passed to the Picker component.
interface PickerProps {
  title: string; // The title displayed in the picker header.
  children: React.ReactNode; // The content that is revealed when the picker is opened.
  animationSize: number; // The size used for animation (e.g., height) when opening/closing.
}

// Define the Picker component as a React functional component.
const Picker: React.FC<PickerProps> = ({
  title,
  children,
  animationSize,
}: PickerProps) => {
  // State to control whether the picker is open or closed.
  const [open, setOpen] = useState(false);
  // Custom hook for managing fade animations.
  const { opacity, size, fadeIn, fadeOut } = useFadeAnimation(0, animationSize);

  // Function to handle the press event and toggle the picker open/closed.
  const onPress = () => {
    if (open) {
      fadeOut(Easing.exp); // Fade out the content when closing.
    } else {
      fadeIn(Easing.exp); // Fade in the content when opening.
    }
    setOpen(!open); // Toggle the open state.
  };
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <Button
        onPress={onPress}
        labelStyle={styles.title}
        contentStyle={{
          width: "100%",
          minHeight: 40,
          alignSelf: "center",
          borderRadius: 8,
          justifyContent: "space-between",
          paddingVertical: 10,
          flexDirection: "row-reverse",
        }}
        rippleColor={theme.colors.transparent}
        style={{
          width: "100%",
          zIndex: 1001,
        }}
        icon={() => (
          <Ionicons
            name={open ? "chevron-up" : "chevron-down"}
            size={30}
            color={colors.subTitle}
          />
        )}
      >
        {title}
      </Button>
      <Animated.View
        style={[
          styles.containerStyle,
          {
            opacity,
            height: size,
            pointerEvents: open ? "auto" : "none",
          },
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
};

// Define the styles for the Picker component.
const styles = StyleSheet.create({
  container: {
    width: "95%",
    minHeight: 40,
    backgroundColor: colors.gray,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerStyle: {
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: -10,
  },
  title: {
    color: colors.subTitle,
    fontSize: 18,
  },
});

// Export the Picker component as the default export of this module.
export default Picker;
