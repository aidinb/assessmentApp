import React from "react";
import {StyleSheet, Dimensions} from "react-native";

import {Button} from "react-native-paper";
import {useAppTheme} from "../theme/globalStyles";

// Define the properties that can be passed to the PickerItem component.
interface PickerItemProps {
  icon?: () => React.ReactNode; // An optional function to render an icon.
  title: string; // The title of the picker item.
  onPress: () => void; // Function to handle the press event.
  selected: boolean; // Flag indicating if the item is selected.
}
const { width } = Dimensions.get("window");
// Define the PickerItem component as a React functional component.
const PickerItem: React.FC<PickerItemProps> = ({
  icon,
  title,
  onPress,
  selected,
}: PickerItemProps) => {
  const theme  = useAppTheme();

  return (
      <Button
          mode="contained"
          buttonColor={selected ? theme.colors.primary : theme.colors.grayDarker}
          textColor={selected ? theme.colors.white : theme.colors.subTitle}
          onPress={onPress}
          contentStyle={[styles.contentStyle,{justifyContent: icon ? 'space-between' : 'center',}]}
          style={styles.container}
          labelStyle={{marginHorizontal:2}}
          icon={() => (
              icon ? icon() : null
          )}
      >
        {title}
      </Button>
  );
};

// Define the styles for the PickerItem component.
const styles = StyleSheet.create({
  container: {
    borderRadius: 10.48,
    height: 53,
    width: width/2-50,
    marginTop: 15,
  },
  contentStyle: {
    height: 53,
    width: width / 2 - 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },

});

// Export the PickerItem component as the default export of this module.
export default PickerItem;
