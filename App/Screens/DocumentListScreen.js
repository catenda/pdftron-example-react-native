import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DocumentListScreen = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Document');
        }}>
        <Text>Download & Open PDF Document</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DocumentPDFScreen');
        }}>
        <Text>Open Local PDF Document</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DocumentOfficeScreen');
        }}>
        <Text>Open Local Office Document</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DocumentXODScreen');
        }}>
        <Text>Open Local XOD Document</Text>
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
