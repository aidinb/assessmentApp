import React, { useState } from "react";
import { View } from "react-native";
import { TextInput } from 'react-native-paper';
import { Text } from 'react-native-paper';

import { formStyles } from "../theme/globalStyles";

// Define the properties that can be passed to the InputWithLabel component.
interface InputWithLabelProps {
  title: string; // The label/title for the input field.
  onChangeText: (text: string) => void; // Function to handle text input changes.
  value: string; // The current value of the input field.
  secureKeyboard?: boolean; // Optional flag to enable secure keyboard input (default is false).
}

// Define the InputWithLabel component as a React functional component.
const InputWithLabel: React.FC<InputWithLabelProps> = ({
  title,
  onChangeText,
  value,
  secureKeyboard = false,
}: InputWithLabelProps) => {
  // State to control whether the input is in secure mode (e.g., for password input).
  const [isSecure, setIsSecure] = useState(secureKeyboard);

  const renderRightIcon = () =>{
    if(secureKeyboard){
      return (
          !isSecure
              ? <TextInput.Icon icon='eye' onPress={() => setIsSecure(!isSecure)}/>
              : <TextInput.Icon icon='eye-off' onPress={() => setIsSecure(!isSecure)}/>
      )
    }}

  return (
      <View style={formStyles.inputWrapper}>
        <Text variant={'bodyLarge'} style={{
          marginLeft: 8,
          marginBottom: 10,
        }}>{title}</Text>
        <TextInput
            style={formStyles.input}
            onChangeText={onChangeText}
            secureTextEntry={isSecure}
            placeholder={title}
            value={value}
            right={renderRightIcon()}/>
      </View>
  );
};

// Export the InputWithLabel component as the default export of this module.
export default InputWithLabel;
