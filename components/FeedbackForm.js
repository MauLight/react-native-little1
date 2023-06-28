import { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function FeedbackForm() {

    const [firstName, onChangeFirstName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [message, onChangeMessage] = useState('');

    return (
        <ScrollView keyboardDismissMode="on-drag" >
            <View style={styles.header}>
                <Text style={styles.headerText}>Tell us your experience!</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeFirstName}
                placeholder="First Name"
                value={firstName}
                maxLength={50} 
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                placeholder="Email"
                value={email}
                maxLength={50}
                keyboardType={"email-address"} 
            />
            <TextInput
                style={styles.input2}
                onChangeText={onChangeMessage}
                placeholder="Message"
                value={message}
                multiline={true}
                maxLength={250} 
            />
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
    }
})
