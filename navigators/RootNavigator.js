import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from '../components/WelcomeScreen';
import SectionMenuItems from '../components/SectionListItems';
import LoginForm from '../components/Loginform';
import Title from '../components/Title';
import Subscribe from '../components/Subscribe';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
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
  );
};

export default RootNavigator;
