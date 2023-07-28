import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../Types/NavigationTypes';

type DocumentListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DocumentList'
>;

type Props = {
  navigation: DocumentListScreenNavigationProp;
};

const DocumentListScreen = ({ navigation }: Props) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Document');
        }}
      >
        <Text>Download & Open PDF Document</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DocumentPDFScreen');
        }}
      >
        <Text>Open Local PDF Document</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DocumentOfficeScreen');
        }}
      >
        <Text>Open Local Office Document</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DocumentXODScreen');
        }}
      >
        <Text>Open Local XOD Document</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ImageScreen');
        }}
      >
        <Text>Open Local Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default DocumentListScreen;
