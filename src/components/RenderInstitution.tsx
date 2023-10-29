import React, {useState} from "react";
import {
  Dimensions, Platform,
  StyleSheet, View,
} from "react-native";

import { colors } from "../theme/colors";
import {typography, useAppTheme} from "../theme/globalStyles";
import {Card} from "react-native-paper";
import { Text} from "react-native-paper";
import StarRating from 'react-native-star-rating-widget';
const { width } = Dimensions.get("window");

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
const RenderInstitution: React.FC<RenderInstitutionProps> = ({
  item,
  onPress,
}: RenderInstitutionProps) => {
  const theme  = useAppTheme();

  return (
      <Card contentStyle={{flexDirection:'row'}} onPress={onPress} style={styles.container}>
        <Card.Cover source={item.image} style={styles.image}/>
        <Card.Content>
          <Text numberOfLines={1}  variant="titleLarge">{item.name}</Text>
          <View style={{flexDirection:'row',marginTop:10,marginBottom:10,alignItems:'center'}}>
          <StarRating
              onChange={(rating)=>{
                console.log(rating)
              }}
              maxStars={5}
              rating={item.rate}
              starSize={15}
              starStyle={{marginHorizontal:1}}
              style={{width:80,marginRight:10}}
          />
            <Text numberOfLines={1} style={{color:theme.colors.subTitle}}  variant="bodySmall">{`${item.rate} (${item.numberOfRates})`}</Text>

          </View>
          <Text numberOfLines={1}  variant="labelMedium">{item.type}</Text>
          <Text variant="bodySmall" style={{marginTop:5,color: theme.colors.subTitle,width:(width - 50)/2}}>{item.description}</Text>
        </Card.Content>
      </Card>
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
