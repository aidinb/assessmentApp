import React from 'react'
import {ActivityIndicator, TouchableOpacity, View, Text} from 'react-native';
import {colors} from "../theme/colors";

export default function PickerItem(props) {

    const {icon, title, onPress, selected} = props;


    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                borderRadius: 10.48,
                paddingLeft: 5,
                backgroundColor: selected ? colors.primary : colors.grayDarker,
                flexDirection: 'row',
                height: 53,
                width: '48%',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop:15

            }}>
            {icon()}
            <Text style={{
                textAlign: 'center',
                color: selected ? colors.white : colors.subTitle,
                fontSize: 16.5,
                width: '70%'
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
};
