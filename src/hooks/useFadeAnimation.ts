// Import necessary modules and types
import { useState } from "react";
import { Animated, Easing, EasingFunction } from "react-native";

// Define the result type for the useFadeAnimation function
type UseFadeAnimationResult = {
  opacity: Animated.Value; // Animated value for controlling opacity
  size: Animated.AnimatedInterpolation<any>; // Animated interpolation for controlling size
  fadeIn: (easing?: EasingFunction) => void; // Function to fade in with optional easing
  fadeOut: (easing?: EasingFunction) => void; // Function to fade out with optional easing
};

// Create a custom hook for handling fade animations
const useFadeAnimation = (
  initiateOpacity,
  boxSize = 110,
): UseFadeAnimationResult => {
  // Initialize opacity as an Animated value
  const [opacity] = useState(new Animated.Value(initiateOpacity));

  // Function to fade in with optional easing
  const fadeIn = (easing: EasingFunction = Easing.exp) => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      easing,
      useNativeDriver: false,
    }).start();
  };

  // Function to fade out with optional easing
  const fadeOut = (easing: EasingFunction = Easing.exp) => {
    opacity.setValue(1);
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      easing,
      useNativeDriver: false,
    }).start();
  };

  // Create an interpolation for controlling size based on opacity
  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, boxSize]
  });

  // Return the animated values and functions
  return { opacity, size, fadeIn, fadeOut };
};

// Export the useFadeAnimation hook
export default useFadeAnimation;
