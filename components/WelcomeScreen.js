import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function WelcomeScreen({ font }) {



    return (
        <ScrollView style={styles.welcomeContainer} >
            <Text style={styles.welcomeHeader}>Bon apetite!</Text>
            <Text style={styles.welcomeText}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
            <View style={styles.imgView}>
                <Image
                    style={styles.image}
                    source={require('../assets/imgs/Picture2.png')}
                    resizeMode="cover"
                    accessible={true}
                    accessibilityLabel={'Restaurant table'}
                />
                <Image
                    style={styles.image}
                    source={require('../assets/imgs/Picture3.png')}
                    resizeMode="cover"
                    accessible={true}
                    accessibilityLabel={'Food dish'}
                />
                <Image
                    style={styles.image}
                    source={require('../assets/imgs/Picture4.png')}
                    resizeMode="cover"
                    accessible={true}
                    accessibilityLabel={'Cutting lemon'}
                />
                <Image
                    style={styles.image}
                    source={require('../assets/imgs/Picture5.png')}
                    resizeMode="cover"
                    accessible={true}
                    accessibilityLabel={'Sea food'}
                />
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    welcomeHeader: {
        fontSize: 40,
        fontFamily: 'Satisfy_400Regular',
        fontWeight: 'bold',
        marginVertical: 5,
    },
    welcomeText: {
        fontSize: 15,
        fontStyle: 'italic',

    },
    image: {
        width: 330,
        height: 220,
        borderRadius: 10,
    },
    imgView: {
        alignItems: 'center',
        gap: 20,
        paddingVertical: 40
    }
})
