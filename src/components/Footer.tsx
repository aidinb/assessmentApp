import React from "react";
import {StyleSheet, View} from "react-native";
import {colors} from "../theme/colors";

interface FooterProps {
    children: React.ReactNode
}

const Footer: React.FC<FooterProps> = (
    {
        children,
    }: FooterProps) => {

    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        height: 160,
        justifyContent: "space-between",
        width:'100%',
        alignItems: "center",
        backgroundColor: colors.secondary,
        paddingVertical: 15,
        paddingBottom: 50,
        flex: 1,
    }
})// Export the Loading component as the default export of this module.
export default Footer;
