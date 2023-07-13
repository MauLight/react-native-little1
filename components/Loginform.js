import { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable, Alert, useColorScheme } from 'react-native';

export default function LoginForm({ navigation }) {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [showLoggedIn, setShowLoggedIn] = useState(false);
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
                        style={styles.input}
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
                            onPress={() => navigation.navigate('Welcome')}
                        >
                            <Text style={styles.buttonText}>
                                Log In
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
        paddingVertical: 30,
        paddingHorizontal: 40,
        borderBottomWidth: 1,
        borderColor: '#EDEFEE'
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
        fontSize: 40,
        color: 'black',
        paddingVertical: 30,
        textAlign: 'center'
    },
    button: {
        paddingVertical: 4,
        marginVertical: 60,
        width: 250,
        marginHorizontal: 'auto',
        borderWidth: 2,
        borderColor: '#333333',
        borderRadius: 15
    }
})
