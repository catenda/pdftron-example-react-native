import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DocumentListScreen = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Document');
        }}>
        <Text>Open Document</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DocumentListScreen;
