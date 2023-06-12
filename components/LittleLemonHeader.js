import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function LittleLemonHeader() {

    return (
        <View style={styles.headerContainer}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
            />
            <Text style={styles.headerText} >LittleLemon Restaurant</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 0.2,
        backgroundColor: '#F4CE14',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        padding: 40,
        fontSize: 20,
        color: '#fff',
    }
})