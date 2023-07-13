import { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable, Alert, useColorScheme, Image } from 'react-native';
import { validateEmail } from '../utils/index'

export default function Subscribe({ navigation }) {

    const [email, onChangeEmail] = useState('');
    const colorScheme = useColorScheme()

    return (
        <ScrollView style={styles.wrapper} keyboardDismissMode="on-drag" >
            <View
                style={[styles.wrapper,
                colorScheme === 'light'
                    ? { backgroundColor: '#F4CE14' }
                    : { backgroundColor: '#fff' }
                ]}
            >
                <>
                    <Pressable onPress={() => navigation.navigate('Welcome')}>
                        <View style={styles.innerContainer}>
                            <Image
                                resizeMode="contain"
                                style={styles.image}
                                source={require('../assets/imgs/logo.png')}
                            />
                        </View>
                    </Pressable>
                    <Text style={[styles.text2, colorScheme === 'light'
                        ? { color: '#fff' }
                        : { color: '#333333' }
                    ]}>
                        Subscribe to our newsletter to receive special offers and delicious recipies!
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        placeholder="Email"
                        value={email}
                        maxLength={50}
                        keyboardType={"email-address"}
                        onBlur={() => { !validateEmail(email) ? Alert.alert("Remember to add your email.") : null }}
                        clearButtonMode="always"
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Pressable
                            style={styles.button}
                            disabled={!validateEmail(email) ? true : false}
                            onPress={() => {
                                Alert.alert("Thanks for subscribing, stay tuned!")
                                navigation.navigate('Welcome')
                            }
                            }
                        >
                            <Text style={styles.buttonText}>
                                Subscribe
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
        flex: 1,
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
        width: 120,
        height: 120,
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text2: {
        fontSize: 15,
        textAlign: 'center',
        fontStyle: 'italic',
        paddingHorizontal: 60,
        marginVertical: 10
    },
})
