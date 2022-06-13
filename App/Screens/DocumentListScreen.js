import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DocumentListScreen = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Document');
        }}>
        <Text>Open Document that download within PDFTron</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DocumentFromLocalFileScreen');
        }}>
        <Text>Open Document that is opened as local file by PDFTron</Text>
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
