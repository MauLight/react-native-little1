// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
// import LittleLemonHeader from './components/LittleLemonHeader';
// import LittleLemonFooter from './components/LittleLemonFooter';
// import WelcomeScreen from './components/WelcomeScreen';
// import SectionMenuItems from './components/SectionListItems';
// import LoginForm from './components/Loginform';
// import { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { navigationRef } from './RootNavigation';
// import AppMenu from './components/AppMenu';

// const Drawer = createDrawerNavigator();

// export default function App() {


//     return (
//         <>
//             <KeyboardAvoidingView
//                 style={styles.container}
//                 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//                 <LittleLemonHeader />
//                 <NavigationContainer ref={navigationRef} >
//                     <Drawer.Navigator
//                         useLegacyImplementation
//                         screenOptions={{ drawerPosition: 'right' }}
//                         initialRouteName="Login to Little Lemon"
//                     >
//                         <Drawer.Screen
//                             name='Login to Little Lemon'
//                             component={LoginForm}
//                         />
//                         <Drawer.Screen
//                             name='Welcome'
//                             component={WelcomeScreen}
//                         />
//                         <Drawer.Screen
//                             name='Menu'
//                             component={SectionMenuItems}
//                         />
//                     </Drawer.Navigator>
//                 </NavigationContainer>
//                 <AppMenu />
//                 <LittleLemonFooter />
//                 <StatusBar style="auto" />
//             </KeyboardAvoidingView>
//         </>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F8fde8',
//     },
//     container2: {
//         flex: 0.2,
//     },
//     button: {
//         padding: 25,
//         backgroundColor: '#ff5050',

//     },
//     text: {
//         color: 'black',
//         fontSize: 20,
//         flexWrap: 'wrap',
//         textAlign: 'center',
//     }
// });
