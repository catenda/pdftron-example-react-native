import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RNPdftron } from 'react-native-pdftron';

import DocumentScreen from './App/Screens/DocumentScreen.js';
import DocumentListScreen from './App/Screens/DocumentListScreen.js';
import DocumentOfficeScreen from './App/Screens/DocumentOfficeScreen.js';
import DocumentPDFScreen from './App/Screens/DocumentPDFScreen.js';
import DocumentXODScreen from './App/Screens/DocumentXODScreen.js';
import ImageScreen from './App/Screens/ImageScreen.js';
import HomeScreen from './App/Screens/HomeScreen.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DocumentStack = () => (
  <Stack.Navigator initialRouteName="DocumentList">
    <Stack.Screen name="Document" component={DocumentScreen} />
    <Stack.Screen name="DocumentPDFScreen" component={DocumentPDFScreen} />
    <Stack.Screen
      name="DocumentOfficeScreen"
      component={DocumentOfficeScreen}
    />
    <Stack.Screen name="DocumentXODScreen" component={DocumentXODScreen} />
    <Stack.Screen name="ImageScreen" component={ImageScreen} />
    <Stack.Screen name="DocumentList" component={DocumentListScreen} />
  </Stack.Navigator>
);

const App = () => {
  RNPdftron.initialize('KEY_GOES_HERE');

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="DocumentStack" component={DocumentStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
