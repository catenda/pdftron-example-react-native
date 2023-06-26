import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RNPdftron} from 'react-native-pdftron';

import DocumentScreen from './App/Screens/DocumentScreen';
import DocumentListScreen from './App/Screens/DocumentListScreen';
import DocumentOfficeScreen from './App/Screens/DocumentOfficeScreen';
import DocumentPDFScreen from './App/Screens/DocumentPDFScreen';
import DocumentXODScreen from './App/Screens/DocumentXODScreen';
import ImageScreen from './App/Screens/ImageScreen';
import HomeScreen from './App/Screens/HomeScreen';

import {RootStackParamList, RootTabParamList} from './App/Types/NavigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

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
