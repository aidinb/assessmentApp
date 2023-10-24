import * as React from 'react';
import {
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {screenStyles} from "../../theme/globalStyles";

// Get the width of the device's window
const {width} = Dimensions.get('window');

export function ClassWork() {
  return (
      <View style={screenStyles.container}>
      </View>
  );
}
