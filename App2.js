import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import SectionMenuItems from './components/SectionListItems';
import LoginForm from './components/Loginform';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { navigationRef } from './RootNavigation';
import { Ionicons } from '@expo/vector-icons'

const Tab = createMaterialBottomTabNavigator();

export default function App() {


    return (
        <>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <LittleLemonHeader />
                <NavigationContainer ref={navigationRef} >
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === 'Welcome') {
                                    iconName = focused
                                        ? 'ios-information-circle'
                                        : 'ios-information-circle-outline';
                                } else if (route.name === 'Menu') {
                                    iconName = 'ios-list';
                                } else {
                                  iconName = 'ios-log-in'
                                }
                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                            tabBarActiveTintColor: 'tomato',
                            tabBarInactiveTintColor: 'gray',
                        })}>
                        <Tab.Screen
                            name='Login to Little Lemon'
                            component={LoginForm}
                        />
                        <Tab.Screen
                            name='Welcome'
                            component={WelcomeScreen}
                        />
                        <Tab.Screen
                            name='Menu'
                            component={SectionMenuItems}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
                <LittleLemonFooter />
                <StatusBar style="auto" />
            </KeyboardAvoidingView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8fde8',
    },
    container2: {
        flex: 0.2,
    },
    button: {
        padding: 25,
        backgroundColor: '#ff5050',

    },
    text: {
        color: 'black',
        fontSize: 20,
        flexWrap: 'wrap',
        textAlign: 'center',
    }
});
