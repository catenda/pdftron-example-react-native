import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Dirs, FileSystem} from 'react-native-file-access';
import {Config, DocumentView, RNPdftron} from 'react-native-pdftron';
import {useIsFocused} from '@react-navigation/native';

const TOOLBAR_ID = 'TOOLBAR';
const TOOLBAR = {
  [Config.CustomToolbarKey.Id]: TOOLBAR_ID,
  [Config.CustomToolbarKey.Name]: TOOLBAR_ID,
  [Config.CustomToolbarKey.Icon]: Config.ToolbarIcons.View,
  [Config.CustomToolbarKey.Items]: [
    Config.Tools.annotationCreateFreeHand,
    Config.Tools.annotationCreateArrow,
    Config.Tools.annotationCreateRectangle,
    Config.Tools.annotationCreateEllipse,
    Config.Tools.annotationCreateLine,
    Config.Tools.annotationCreateFreeText,
    Config.Tools.annotationCreatePolyline,
    Config.Tools.annotationCreateStamp,
    Config.Tools.annotationEraserTool,
    Config.Buttons.undo,
    Config.Buttons.redo,
  ],
};

const ImageScreen = () => {
  const isFocused = useIsFocused();
  const [isReadyToRender, setIsReadyToRender] = useState(
    Platform.OS !== 'android',
  );
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    FileSystem.exists(Dirs.CacheDir + '/image.jpg').then(exists => {
      if (!exists) {
        FileSystem.cpAsset('image.jpg', Dirs.CacheDir + '/image.jpg')
          .then(() => {
            setIsReadyToRender(true);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        if (Platform.OS === 'android') {
          RNPdftron.clearSavedViewerState().then(() => {
            setIsReadyToRender(true);
          });
        }
      }
    });
  }, []);

  useEffect(() => {
    if (!isFocused) {
      if (Platform.OS === 'android') {
        setIsImageLoaded(false);
      }
    }
  }, [isFocused]);

  const onImageError = error => {
    console.log('Error:', error);
  };

  const onImageLoaded = () => {
    console.log('Image loaded.');
    setIsImageLoaded(true);
  };

  return isReadyToRender ? (
    <>
      {!isImageLoaded && <View style={Styles.container} />}
      <DocumentView
        annotationToolbars={[TOOLBAR]}
        bottomToolbarEnabled={false}
        defaultEraserType={Config.EraserType.hybrideEraser} // Android enable erase all annotation types
        disabledElements={[Config.Buttons.editMenuButton]}
        document={Dirs.CacheDir + '/image.jpg'}
        documentSliderEnabled={false} // Shows native scroll indicator on iOS, nothing on Android
        followSystemDarkMode={false}
        hideScrollbars={true}
        hideToolbarsOnTap={false}
        hideTopAppNavBar={true}
        longPressMenuEnabled={false}
        pageIndicatorEnabled={false}
        saveStateEnabled={false}
        onDocumentError={onImageError}
        onDocumentLoaded={onImageLoaded}
      />
    </>
  ) : null;
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 200,
  },
});

export default ImageScreen;
