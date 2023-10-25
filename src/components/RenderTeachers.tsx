import React from 'react'
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {colors} from "../theme/colors";
import {typography} from "../theme/globalStyles";

export default function RenderTeachers(props) {
    const item = props.item
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            marginLeft: 20,
            backgroundColor: colors.white,
            borderRadius: 12,
            padding: 10,
            justifyContent: 'flex-start',
            shadowOffset: {
                width: 1,
                height: 2,
            },
            shadowOpacity: 0.3,
            shadowColor: colors.shadow,
            shadowRadius: 3,
            alignItems:'flex-start',
        }}>
            <Image
                source={item.image}
                style={{width: 110, height: 115,marginBottom:10}}
            />
            <Text style={typography.h4}>
                {item.name}
            </Text>
            <Text style={{fontSize: 14,color:colors.subTitle,marginTop:5}}>
                {item.field}
            </Text>
        </TouchableOpacity>
    )
}
