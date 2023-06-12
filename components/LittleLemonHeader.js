import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function LittleLemonHeader() {

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText} >Welcome to</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#fff' }}> LittleLemon Restaurant</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 0.2,
        backgroundColor: '#F4CE14',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30
    },
    headerText: {
        padding: 2,
        fontSize: 15,
        color: '#fff',
    }
})