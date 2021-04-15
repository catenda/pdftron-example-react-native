import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import {RNPdftron} from 'react-native-pdftron';

import DocumentViewerScreen from './Screens/DocumentViewerScreen';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    size: '8.6 MB',
    path: 'https://pdftron.s3.amazonaws.com/downloads/pdfref.pdf',
  },
  {
    id: '2',
    title: 'Second Item',
    size: '11.3 MB',
    path: 'https://www.nasa.gov/specials/apollo50th/pdf/A11_MissionReport.pdf',
  },
  {
    id: '3',
    title: 'Third Item',
    size: '3.0 kB',
    path: 'http://www.africau.edu/images/default/sample.pdf',
  },
];

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => <Item navigation={navigation} item={item} />;

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const Item = ({navigation, item}) => {
  const {title, path, size} = item;

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('DocumentViewer', {path: path})}>
      <Text style={styles.title}>{title}</Text>
      <Text>{size}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  RNPdftron.initialize('KEY_GOES_HERE');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DocumentViewer" component={DocumentViewerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'black',
  },
});

export default App;
