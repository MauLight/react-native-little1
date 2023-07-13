import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import SectionMenuItems from './components/SectionListItems';
import LoginForm from './components/Loginform';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import AppMenu from './components/AppMenu';
import Title from './components/Title';
import Subscribe from './components/Subscribe';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10000);
  }, [])

  return (
    <>
      {
        loading ?
          <Title setLoading={setLoading} loading={loading} />
          :
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <LittleLemonHeader setLoading={setLoading} />
            <NavigationContainer ref={navigationRef} >
              <Stack.Navigator
                initialRouteName="Newsletter"
              >
                <Stack.Screen
                  name='Login to Little Lemon'
                  component={LoginForm}
                />
                <Stack.Screen
                  name='Title'
                  component={Title}
                />
                <Stack.Screen
                  name='Welcome'
                  component={WelcomeScreen}
                />
                <Stack.Screen
                  name='Menu'
                  component={SectionMenuItems}
                />
                <Stack.Screen
                  name='Newsletter'
                  component={Subscribe}
                />
              </Stack.Navigator>
            </NavigationContainer>
            <AppMenu />
            <LittleLemonFooter />
            <StatusBar style="auto" />
          </KeyboardAvoidingView>
      }
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
