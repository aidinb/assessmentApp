import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import StarRating from "react-native-star-rating-widget";

import { theme, useAppTheme } from "../theme/globalStyles";

// Define the properties that can be passed to the RenderInstitution component.
interface RenderInstitutionProps {
  item: {
    image: string; // URL or path to the institution's image.
    name: string; // The name of the institution.
    type: string; // The type or category of the institution.
    rate: number; // The rate or category of the institution.
    numberOfRates: number; // The number of rate or category of the institution.
    description: string; // A description or additional information about the institution.
  };
  onPress: () => void; // Function to handle the press event on the institution item.
}

// Define the RenderInstitution component as a React functional component.
const RenderInstitution: React.FC<RenderInstitutionProps> = React.memo(
  ({ item, onPress }: RenderInstitutionProps) => {
    const theme = useAppTheme();

    const memoizedOnPress = useCallback(() => {
      onPress();
    }, [onPress]);

    return (
      <Card
        contentStyle={{ flexDirection: "row" }}
        onPress={memoizedOnPress}
        style={styles.container}
      >
        <Card.Cover
          // @ts-ignore
          source={item.image}
          style={styles.image}
        />
        <Card.Content>
          <Text
            numberOfLines={1}
            style={{ width: "37%", fontFamily: "Inter_600SemiBold" }}
            variant="titleMedium"
          >
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              marginBottom: 10,
              alignItems: "center",
            }}
          >
            <StarRating
              onChange={(rating) => {
                console.log(rating);
              }}
              maxStars={5}
              rating={item.rate}
              starSize={15}
              starStyle={{ marginHorizontal: 1 }}
              style={{ width: 80, marginRight: 10 }}
            />
            <Text
              numberOfLines={1}
              style={{
                color: theme.colors.grayText,
                fontFamily: "Inter_400Regular",
              }}
              variant="bodySmall"
            >{`${item.rate} (${item.numberOfRates})`}</Text>
          </View>
          <Text
            numberOfLines={1}
            style={{ width: "37%", fontFamily: "Inter_600SemiBold" }}
            variant="labelMedium"
          >
            {item.type}
          </Text>
          <Text
            variant="bodySmall"
            style={{
              marginTop: 5,
              color: theme.colors.grayText,
              width: "37%",
              fontFamily: "Inter_400Regular",
            }}
          >
            {item.description}
          </Text>
        </Card.Content>
      </Card>
    );
  },
);

// Define the styles for the RenderInstitution component.
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "95%",
    flexDirection: "row",
    alignSelf: "center",
  },
  image: {
    width: 145,
    height: 161,
  },
});

// Export the RenderInstitution component as the default export of this module.
export default RenderInstitution;
