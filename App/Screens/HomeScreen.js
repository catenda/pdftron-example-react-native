import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { RNPdftron } from 'react-native-pdftron';

const HomeScreen = () => (
  <View style={Styles.container}>
    <Text>Home</Text>
    <TouchableOpacity
      onPress={() => {
        if (Platform.OS === 'android') {
          RNPdftron.clearSavedViewerState().then(() => {
            console.log('Cleared saved viewer state');
          });
        }
      }}
    >
      <Text>Reset Viewer State</Text>
    </TouchableOpacity>
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
