import React from 'react';
import { navigationRef } from '../utils/NavigationUtils';
import SplashScreen from '../screens/SplashScreen';
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import JoinMeetScreen from '../screens/JoinMeetScreen';
import LiveMeetScreen from '../screens/LiveMeetScreen';
import PrepareMeetScreen from '../screens/PrepareMeetScreen';
import {WSProvider}  from "../service/api/WSProvider"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <WSProvider>
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{ animation: 'fade' }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="JoinMeetScreen" component={JoinMeetScreen} />
        <Stack.Screen name="PrepareMeetScreen" component={PrepareMeetScreen} />
        <Stack.Screen name="LiveMeetScreen" component={LiveMeetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </WSProvider>
  );
};

export default Navigation;
