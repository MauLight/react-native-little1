import { View, Text, StyleSheet } from "react-native";

export default function WelcomeScreen() {
    return (
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeHeader}>Bon apetite!</Text>
            <Text style={styles.welcomeText}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 0.3,
        padding: 20,

        alignItems: 'center'
    },
    welcomeHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10
    },
    welcomeText: {
        fontSize: 15,
        fontStyle: 'italic'
    }
})
