import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HomeScreen = () => (
  <View style={Styles.container}>
    <Text>Home</Text>
  </View>
);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
