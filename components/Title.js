import { ScrollView, StyleSheet, Text, TextInput, View, Pressable, Alert, useColorScheme, Image } from 'react-native';
import * as RootNavigation from '../RootNavigation'

export default function Title({ loading, setLoading }) {

    const colorScheme = useColorScheme()

    return (
        <ScrollView style={[styles.wrapper, colorScheme === 'light'
            ? { backgroundColor: '#F4CE14' }
            : { backgroundColor: '#fff' }
        ]} contentContainerStyle={styles.contentContainer} keyboardDismissMode="on-drag" >
            <View>
                <>
                    <Pressable onPress={() => {
                        loading ? setLoading(false) : null
                        RootNavigation.navigate('Login')
                    }}>
                        <View style={styles.innerContainer}>
                            <Image
                                resizeMode="contain"
                                style={styles.image}
                                source={require('../assets/imgs/logo.png')}
                            />
                        </View>
                    </Pressable>
                    <View style={styles.textBox}>
                        <Text style={[styles.text, colorScheme === 'light'
                            ? { color: '#fff' }
                            : { color: '#333333' }
                        ]}>
                            Little Lemon
                        </Text>
                        <Text style={[styles.text2, colorScheme === 'light'
                            ? { color: '#fff' }
                            : { color: '#333333' }
                        ]}>
                            Your local Mediterranean Bistro
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Pressable
                            style={styles.button}
                            onPress={() => {
                                loading ? setLoading(false) : null
                                RootNavigation.navigate('Subscribe')
                            }
                            }
                        >
                            <Text style={styles.buttonText}>
                                Newsletter
                            </Text>
                        </Pressable>
                    </View>
                </>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%'
    },
    input: {
        color: '#333333',
        fontSize: 18,
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderBottomWidth: 1,
        borderColor: '#EDEFEE'
    },
    buttonText: {
        fontSize: 40,
        color: 'black',
        paddingVertical: 20,
        textAlign: 'center'
    },
    button: {
        paddingVertical: 4,
        marginVertical: 55,
        width: 250,
        marginHorizontal: 'auto',
        borderWidth: 2,
        borderColor: '#333333',
        borderRadius: 15
    },
    image: {
        marginTop: 20,
        width: 250,
        height: 250,
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 15,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    textBox: {
        width: 300,
    }
})
