import { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function LoginForm() {

    //const [firstName, onChangeFirstName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <ScrollView keyboardDismissMode="on-drag" >
            <View style={styles.header}>
                <Text style={styles.headerText}>Log-in to Little Lemon</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                placeholder="Email"
                value={email}
                maxLength={50}
                keyboardType={"email-address"}
                onBlur={() => {Alert.alert("Remember to add your email.")}}
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
            <Button title="Submit" style={styles.button} >Submit</Button>
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
        backgroundColor: '#F4CE14',
        justifyContent: 'center',
        flexDirection: "row",
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
    },
    button: {
        paddingVertical: 10
    }
})
