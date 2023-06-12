import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonFooter() {

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText} >M.Light all rights reserved, 2023</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 0.08,
        backgroundColor: '#F4CE14',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        padding: 20,
        fontSize: 15,
        color: '#fff',
    }
})