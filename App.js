import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, Pressable, useWindowDimensions } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import SectionMenuItems from './components/SectionListItems';
import LoginForm from './components/Loginform';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <LittleLemonHeader />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
          >
            <Stack.Screen
              name='Login to Little Lemon'
              component={LoginForm}
            />
            <Stack.Screen
              name='Welcome'
              component={WelcomeScreen}
            />
            <Stack.Screen
              name='Menu'
              component={SectionMenuItems}
            />
          </Stack.Navigator>
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
