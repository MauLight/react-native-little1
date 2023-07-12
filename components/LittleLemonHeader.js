import { View, Text, StyleSheet, Image, useColorScheme } from "react-native";

export default function LittleLemonHeader() {

    const colorScheme = useColorScheme();

    return (
        <View style={[
            styles.headerContainer,
            colorScheme === 'light'
                ? { backgroundColor: '#F4CE14' }
                : { backgroundColor: '#333333' }
        ]}>
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
        marginHorizontal: 5
    }
})