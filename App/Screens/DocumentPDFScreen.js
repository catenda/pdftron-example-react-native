import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Dirs, FileSystem} from 'react-native-file-access';
import {Config, DocumentView, RNPdftron} from 'react-native-pdftron';
import {useIsFocused} from '@react-navigation/native';

const DocumentPDFScreen = () => {
  const isFocused = useIsFocused();
  const [isReadyToRender, setIsReadyToRender] = useState(
    Platform.OS !== 'android',
  );
  const [isDocumentLoaded, setIsDocumentLoaded] = useState(false);

  useEffect(() => {
    FileSystem.exists(Dirs.CacheDir + '/test.pdf').then(exists => {
      if (!exists) {
        FileSystem.cpAsset('test.pdf', Dirs.CacheDir + '/test.pdf')
          .then(() => {
            if (Platform.OS === 'android') {
              RNPdftron.clearSavedViewerState().then(() => {
                setIsReadyToRender(true);
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        setIsReadyToRender(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!isFocused) {
      if (Platform.OS === 'android') {
        setIsDocumentLoaded(false);
      }
    }
  }, [isFocused]);

  const onDocumentError = error => {
    console.log('Error:', error);
  };

  const onDocumentLoaded = () => {
    console.log('Document loaded.');
    setIsDocumentLoaded(true);
  };

  return isReadyToRender ? (
    <>
      {!isDocumentLoaded && <View style={Styles.container} />}
      <DocumentView
        annotationToolbars={[]}
        bottomToolbar={[
          Config.Buttons.viewControlsButton,
          Config.Buttons.thumbnailsButton,
          Config.Buttons.searchButton,
        ]}
        bottomToolbarEnabled={false}
        disabledElements={[Config.Buttons.listsButton]}
        document={Dirs.CacheDir + '/test.pdf'}
        followSystemDarkMode={false}
        hideAnnotationToolbarSwitcher={true}
        hideThumbnailFilterModes={[
          Config.ThumbnailFilterMode.Annotated,
          Config.ThumbnailFilterMode.Bookmarked,
        ]}
        hideViewModeItems={[Config.ViewModePickerItem.Crop]} // Android hide crop feature under view settings
        keyboardShortcutsEnabled={false}
        longPressMenuEnabled={false}
        readOnly={true} // Disable all editing methods including Apple PencilKit
        saveStateEnabled={false}
        showLeadingNavButton={false}
        showQuickNavigationButton={false}
        tabletLayoutEnabled={false}
        thumbnailViewEditingEnabled={false}
        topAppNavBarRightBar={[
          Config.Buttons.searchButton,
          Config.Buttons.thumbnailsButton,
          Config.Buttons.viewControlsButton,
        ]}
        onDocumentError={onDocumentError}
        onDocumentLoaded={onDocumentLoaded}
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

export default DocumentPDFScreen;
