import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function LittleLemonHeader() {

    return (
        <View style={styles.headerContainer}>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../assets/imgs/logo.png')}
            />
            <View style={styles.innerContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#fff' }}>LittleLemon Bar</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: '#F4CE14',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30
    },
    headerText: {
        padding: 2,
        fontSize: 15,
        color: '#fff',
    },
    image: {
        width: 80,
        height: 80,
        marginHorizontal: 3
    }
})