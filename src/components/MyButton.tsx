import React from "react";
import { ViewStyle } from "react-native";
import { Button } from "react-native-paper";

import { useAppTheme } from "../theme/globalStyles";

// Define the properties that can be passed to the MyButton component.
interface ButtonProps {
  onPress: () => void; // Function to be called when the button is pressed.
  title?: string; // Optional button title text (default is 'Next').
  backgroundColor?: boolean; // Optional flag to determine if the button should have a background color (default is true).
  style?: object; // Additional styles to be applied to the button.
}

const MyButton: React.FC<ButtonProps> = React.memo(
  ({ style, onPress, title = "Next", backgroundColor = true }: ButtonProps) => {
    const theme = useAppTheme();

    // Define the button's style properties.
    const buttonStyle: ViewStyle = {
      minWidth: 267,
      height: 61,
      ...style,
    };

    return (
      <Button
        mode="contained"
        textColor={backgroundColor ? theme.colors.white : theme.colors.primary}
        contentStyle={buttonStyle}
        buttonColor={
          backgroundColor ? theme.colors.primary : theme.colors.transparent
        }
        labelStyle={{ fontSize: 16 }}
        rippleColor={
          backgroundColor ? theme.colors.primary : theme.colors.transparent
        }
        onPress={onPress}
      >
        {title}
      </Button>
    );
  },
);

// Export the MyButton component as the default export of this module.
export default MyButton;
