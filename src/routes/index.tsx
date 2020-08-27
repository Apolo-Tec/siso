import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useSelector } from 'react-redux';

//const isLogged  = useSelector((state) => state.user.data.Error);

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

import Home from '../screens/Home';
import Login from '../screens/Login';
import Error from '../screens/Error';
import Tutorial from '../screens/Tutorial';

const isLogged = false;
const isNewUser = true;

const drawerStack = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="quotation" options={{ title: 'Cotação' }} component={quotationStack} />
  </Drawer.Navigator>
)

const loginStack = () => (
  <Stack.Navigator>
    { isNewUser && <Stack.Screen name="Tutorial" options={{ headerShown: false }} component={Tutorial} /> }
    <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
    <Stack.Screen name="Error" component={Error} />
  </Stack.Navigator>
);

const quotationStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
)

export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLogged ?  drawerStack() : loginStack() }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}