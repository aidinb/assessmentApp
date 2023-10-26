import React, {useState} from 'react'
import { View, Text,TouchableOpacity } from 'react-native';
import {colors} from "../theme/colors";
import { Ionicons } from '@expo/vector-icons';
export default function Picker(props) {
    const {  title } = props;
    const [open, setOpen] = useState(false);

    return (
        <View style={{
            width: '90%',
            minHeight: 60,
            backgroundColor: colors.gray,
            borderRadius: 8,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:20
        }}>
            <TouchableOpacity activeOpacity={0.9}
                              onPress={() => setOpen(!open)}
                              style={{
                                  paddingHorizontal: 10,
                                  paddingVertical: 10,
                                  width: '100%',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  flexDirection: 'row'
                              }}>
                <Text style={{color: colors.subTitle, fontSize: 18}}>
                    {title}
                </Text>
                <Ionicons
                    name={open ? "chevron-up" :"chevron-down"}
                    size={30}
                    color={colors.subTitle}
                />
            </TouchableOpacity>
                {open ? props.children : null}


        </View>
    );
}
