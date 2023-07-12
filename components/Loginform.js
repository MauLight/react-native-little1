import { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable, Alert, useColorScheme } from 'react-native';

export default function LoginForm() {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [showLoggedIn, setShowLoggedIn] = useState(false);
    const colorScheme = useColorScheme()

    return (
        <ScrollView keyboardDismissMode="on-drag" >
            <View
                style={[
                    styles.header,
                    colorScheme === 'light'
                        ? { backgroundColor: '#F4CE14' }
                        : { backgroundColor: '#333333' }
                ]}
            >
                <Text style={styles.headerText}
                >Log-in to Little Lemon</Text>
            </View>
            <View
                style={[
                    colorScheme === 'light'
                        ? { backgroundColor: '#F4CE14' }
                        : { backgroundColor: '#fff' }
                ]}
            >
                {
                    !showLoggedIn && (
                        <>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeEmail}
                                placeholder="Email"
                                value={email}
                                maxLength={50}
                                keyboardType={"email-address"}
                                onBlur={() => { Alert.alert("Remember to add your email.") }}
                                clearButtonMode="always"
                            />
                            <TextInput
                                style={styles.input2}
                                onChangeText={onChangePassword}
                                placeholder="Password"
                                value={password}
                                maxLength={14}
                                keyboardType={"default"}
                                secureTextEntry={true}
                            />
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Pressable
                                    style={styles.button}
                                    onPress={() => { setShowLoggedIn(!showLoggedIn) }}
                                >
                                    <Text style={styles.buttonText}>
                                        Log In
                                    </Text>
                                </Pressable>
                            </View>
                        </>
                    )
                }

                {
                    showLoggedIn && (
                        <>
                            <Text style={styles.loginText}>
                                'You are logged in!'
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Pressable
                                    style={styles.button}
                                    onPress={() => { setShowLoggedIn(!showLoggedIn) }}
                                >
                                    <Text style={styles.buttonText}>
                                        Log Out
                                    </Text>
                                </Pressable>
                            </View>
                        </>
                    )
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        color: '#333333',
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderBottomWidth: 1,
        borderColor: '#EDEFEE'
    },
    input2: {
        color: '#333333',
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    header: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        justifyContent: 'center',
        flexDirection: "row",
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
    },
    loginText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        paddingVertical: 33
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
        paddingVertical: 20,
        textAlign: 'center'
    },
    button: {
        paddingVertical: 4,
        marginVertical: 10,
        width: 150,
        marginHorizontal: 'auto',
        borderWidth: 2,
        borderColor: '#333333',
        borderRadius: 15
    }
})
