import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RNPdftron} from 'react-native-pdftron';

import DocumentScreen from './App/Screens/DocumentScreen.js';
import HomeScreen from './App/Screens/HomeScreen.js';

const Tab = createBottomTabNavigator();

const App = () => {
  RNPdftron.initialize('KEY_GOES_HERE');

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Document" component={DocumentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
