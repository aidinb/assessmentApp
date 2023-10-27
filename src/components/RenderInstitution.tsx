import React from "react";
import {
  Pressable,
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";

import { colors } from "../theme/colors";
import { typography } from "../theme/globalStyles";

const { width } = Dimensions.get("window");

// Define the properties that can be passed to the RenderInstitution component.
interface RenderInstitutionProps {
  item: {
    image: string; // URL or path to the institution's image.
    name: string; // The name of the institution.
    type: string; // The type or category of the institution.
    description: string; // A description or additional information about the institution.
  };
  onPress: () => void; // Function to handle the press event on the institution item.
}

// Define the RenderInstitution component as a React functional component.
const RenderInstitution: React.FC<RenderInstitutionProps> = ({
  item,
  onPress,
}: RenderInstitutionProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>

      <Image
          // @ts-ignore
          source={item.image}
          style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={typography.h3}>{item.name}</Text>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Pressable>
  );
};

// Define the styles for the RenderInstitution component.
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 10,
    justifyContent: "flex-start",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowColor: colors.shadow,
    shadowRadius: 3,
    alignItems: "flex-start",
    width: width - 40,
    flexDirection: "row",
    alignSelf: "center",
  },
  image: {
    width: 145,
    height: 161,
  },
  infoContainer: {
    width: "60%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  type: {
    fontSize: 14,
    color: colors.black,
    marginTop: 15,
  },
  description: {
    fontSize: 12,
    color: colors.subTitle,
    marginTop: 5,
  },
});

// Export the RenderInstitution component as the default export of this module.
export default RenderInstitution;
