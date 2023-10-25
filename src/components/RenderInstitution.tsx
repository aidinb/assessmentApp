import React from 'react'
import {TouchableOpacity, Image, Text, View, Dimensions} from 'react-native';
import {colors} from "../theme/colors";
import {typography} from "../theme/globalStyles";
const {width} = Dimensions.get('window');

export default function RenderInstitution(props) {
    const item = props.item
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            marginTop: 20,
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
            width:width-40,
            flexDirection:'row',
            alignSelf:'center'
        }}>
            <Image
                source={item.image}
                style={{width: 145, height: 161,marginBottom:10}}
            />
            <View style={{width:'60%',alignItems:'flex-start',justifyContent:'center',paddingHorizontal:10,paddingVertical:5}}>
                <Text style={typography.h3}>
                    {item.name}
                </Text>
                <Text style={{fontSize: 14,color:colors.black,marginTop:15}}>
                    {item.type}
                </Text>
                <Text style={{fontSize: 12,color:colors.subTitle,marginTop:5}}>
                    {item.description}
                </Text>

            </View>

        </TouchableOpacity>
    )
}
