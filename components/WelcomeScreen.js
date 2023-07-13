import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, Pressable } from "react-native";

export default function WelcomeScreen({ navigation }) {



    return (
        <ScrollView style={styles.welcomeContainer} >
            <ImageBackground
                style={styles.background}
                resizeMode='cover'
                source={require('../assets/imgs/back.png')}
            >
                <View style={styles.textWrap}>
                    <Text style={styles.welcomeHeader}>Bon apetite!</Text>
                    <Text style={styles.welcomeText}>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                    </Text>
                </View>
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
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Pressable
                            style={styles.button}
                            onPress={() => navigation.navigate('Menu')}
                        >
                            <Text style={styles.buttonText}>
                                Menu
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,

    },
    welcomeHeader: {
        fontSize: 60,
        textAlign: 'center',
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
    },
    background: {
        flex: 1,
        justifyContent: 'center'
    }, textWrap: {
        paddingHorizontal: 20,
        paddingVertical: 20
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
