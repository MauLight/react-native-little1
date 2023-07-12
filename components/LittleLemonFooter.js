import { View, Text, StyleSheet, useColorScheme } from "react-native";

export default function LittleLemonFooter() {

    const colorScheme = useColorScheme()

    return (
        <View style={[
            styles.headerContainer,
            colorScheme === 'light'
                ? { backgroundColor: '#F4CE14' }
                : { backgroundColor: '#333333' }
        ]}>
            <Text style={styles.headerText} >M.Light all rights reserved, 2023</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#F4CE14',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0
    },
    headerText: {
        padding: 5,
        fontSize: 15,
        color: '#fff',
    }
})