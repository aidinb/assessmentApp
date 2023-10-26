import React from 'react'
import {TouchableOpacity, Animated, Dimensions, View} from 'react-native';
import {colors} from "../theme/colors";
import {typography} from "../theme/globalStyles";
import Text = Animated.Text;
const {width} = Dimensions.get('window');

export default function RenderFilter(props) {
    const {title, items,onPress,
        selected } = props


    return(
        <View style={{width:width,alignItems:'flex-start',justifyContent:'center',paddingHorizontal:20,marginTop:-10,marginBottom:15}}>
            <Text style={typography.subTitle}>
                {title}
            </Text>
            <View style={{width:'100%',flexDirection:'row',flexWrap:'wrap'}}>
                {items.length>0 ?
                    items.map((item)=>{
                        return (
                            <TouchableOpacity key={item} onPress={()=>onPress(item)}
                                              style={{
                                                  marginTop: 10,
                                                  backgroundColor: selected === item ? colors.primary :colors.white,
                                                  borderRadius: 8,
                                                  padding: 7,
                                                  marginRight: 5,
                                                  paddingHorizontal: 15
                                              }}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        );
                    }): null}
            </View>
        </View>
    );
}
