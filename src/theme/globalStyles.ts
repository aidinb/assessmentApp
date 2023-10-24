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
    input: {
        width: '100%',
        height: 50,
        paddingHorizontal: 16,
        marginBottom: 8,
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: colors.black,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },
    labelClean: {
        fontSize: 16,
        fontFamily: 'Inter_700Bold',
        color: colors.white,
    },
    inputClean: {
        width: '100%',
        height: 30,
        paddingHorizontal: 16,
        marginBottom: 8,
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        color: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
    compactInputWrapper: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        paddingVertical: 8,
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 16,
        shadowColor: '#000000',
        marginBottom: 8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.0,
        elevation: 1,
    },
    compactInput: {
        width: '100%',
        marginLeft: 12,
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
})

export const NavigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.white
    },
};
