import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import FlatMenuItems from './components/FlatMenuItems';
import { useFonts } from '@expo-google-fonts/satisfy';
import { Satisfy_400Regular } from '@expo-google-fonts/satisfy';
import SectionMenuItems from './components/SectionListItems';
import FeedbackForm from './components/FeedbackForm';
import LoginForm from './components/Loginform';

export default function App() {

  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
  });

  return (
    <>
      {
        fontsLoaded ?
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.container}>
              <LittleLemonHeader />

              <SectionMenuItems />
            </View>
            <View>
              <LoginForm />
            </View>
            <View>
              <LittleLemonFooter />
            </View>
            <StatusBar style="auto" />
          </KeyboardAvoidingView>
          :
          null
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
  }
});
