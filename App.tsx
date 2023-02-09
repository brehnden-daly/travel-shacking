import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Styles from './Styling';
import { StackParams } from './Navigation/navigation_stack_params';

import LANDING from './Views/Landing';
import LOGIN from './Views/Login';
import SIGNUP from './Views/Signup';




const Stack = createNativeStackNavigator<StackParams>();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          
        }}>
        <Stack.Screen name="Landing" options={{headerShown: false}} component={LANDING}></Stack.Screen>
        <Stack.Screen name="Login" options={{title: "", headerShown: true, headerTransparent: true}} component={LOGIN}></Stack.Screen>
        <Stack.Screen name="Signup" options={{title: "", headerShown: true, headerTransparent: true}} component={SIGNUP}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

