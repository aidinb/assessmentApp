import {Dimensions, StyleSheet} from 'react-native';
import { colors } from './colors';
const {width} = Dimensions.get('window');
import { DefaultTheme } from '@react-navigation/native';

export const typography = StyleSheet.create({
    h1: {
        fontSize: 28,
    },
    h2: {
        fontSize: 22,
        color: colors.black,
        fontFamily: 'Inter_600SemiBold',
    },
    h3: {
        fontSize: 18,
        fontFamily: 'Inter_600SemiBold',
    },
    paragraph: {
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
        color: colors.black,
        marginTop: 8,
    },
    titleClean: {
        fontSize: 20,
        fontFamily: 'Inter_700Bold',
        color: colors.black,
        textAlign: 'center',
    },
    subTitleClean: {
        fontSize: 18,
        fontFamily: 'Inter_400Regular',
        color: colors.subTitle,
        textAlign: 'center',
        marginTop: 15,
    },
});

export const formStyles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
        color: colors.black,
        marginLeft:8,
        marginBottom:10
    },
    inputWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    input: {
        width: '95%',
        alignSelf:'center',
        backgroundColor:colors.white,
        height:50,
        borderRadius:8,
        paddingLeft:10

    },

});
export const screenStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centerContainer: {
      width:width,
        alignItems:'center',
        justifyContent: 'center',

    },
    bottomButtons:{
        position:'absolute',bottom:0,height:160,justifyContent: 'space-between',
        width:width,
        alignItems:'center',
        backgroundColor:colors.secondary,
        paddingVertical:15,
        paddingBottom:50
    }
})

export const NavigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.secondary
    },
};
