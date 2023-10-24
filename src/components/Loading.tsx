import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import {colors} from "../theme/colors";

export default function Loading() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:colors.transparent }}>
            <ActivityIndicator color={"#7c3aed"} />
        </View>
    )
}
