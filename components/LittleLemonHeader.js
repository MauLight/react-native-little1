import { View, Text, StyleSheet, Image, useColorScheme, Pressable } from "react-native";
import * as RootNavigation from '../RootNavigation'

export default function LittleLemonHeader({ setLoading }) {

    const colorScheme = useColorScheme();

    return (
        <View style={[
            styles.headerContainer,
            colorScheme === 'light'
                ? { backgroundColor: '#F4CE14' }
                : { backgroundColor: '#333333' }
        ]}>
            <>
                <Pressable onPress={() => {
                    setLoading(true)
                    RootNavigation.navigate('Welcome')
                }
                }
                >
                    <View style={styles.innerContainer}>
                        <Image
                            resizeMode="contain"
                            style={styles.image}
                            source={require('../assets/imgs/logo.png')}
                        />
                        <Text style={{ fontWeight: 'bold', fontSize: 40, color: '#fff' }}>LittleLemon Bar</Text>
                    </View>
                </Pressable>
            </>

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15
    },
    image: {
        width: 78,
        height: 78,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})