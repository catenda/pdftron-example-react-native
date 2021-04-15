import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

import {DocumentView} from 'react-native-pdftron';

const DocumentViewerScreen = ({route}) => {
  const {params} = route;
  const {path} = params;

  React.useEffect(() => {
    console.log('Mounting DocumentViewer Screen');
    return function onUnmount() {
      console.log('unMounting DocumentViewer Screen');
    };
  });

  return (
    <View style={styles.container}>
      <DocumentView document={path} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default DocumentViewerScreen;
