import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Dirs, FileSystem } from 'react-native-file-access';
import { Config, DocumentView, RNPdftron } from 'react-native-pdftron';
import { useIsFocused } from '@react-navigation/native';

const DocumentOfficeScreen = () => {
  const isFocused = useIsFocused();
  const [isReadyToRender, setIsReadyToRender] = useState(
    Platform.OS !== 'android',
  );
  const [isDocumentLoaded, setIsDocumentLoaded] = useState(false);

  useEffect(() => {
    FileSystem.exists(Dirs.CacheDir + '/test.docx').then((exists) => {
      if (!exists) {
        FileSystem.cpAsset('test.docx', Dirs.CacheDir + '/test.docx')
          .then(() => {
            setIsReadyToRender(true);
          })
          .catch((error) => {
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
        setIsDocumentLoaded(false);
      }
    }
  }, [isFocused]);

  const onDocumentError = (error) => {
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
        annotationToolbars={[]} // Hide second top toolbar on Android
        bottomToolbarEnabled={false}
        disabledElements={[Config.Buttons.listsButton]}
        document={Dirs.CacheDir + '/test.docx'}
        documentSliderEnabled={false} // Shows native scroll indicator on iOS, nothing on Android
        followSystemDarkMode={false}
        forceAppTheme={Config.ThemeOptions.ThemeDark}
        hideAnnotationToolbarSwitcher={true}
        hideThumbnailFilterModes={[
          Config.ThumbnailFilterMode.Annotated,
          Config.ThumbnailFilterMode.Bookmarked,
        ]}
        hideViewModeItems={[Config.ViewModePickerItem.Crop]}
        keyboardShortcutsEnabled={false}
        longPressMenuEnabled={false}
        pageIndicatorEnabled={Platform.OS !== 'android'}
        readOnly={true} // Disable all editing methods including Apple PencilKit
        saveStateEnabled={Platform.OS === 'android'}
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

export default DocumentOfficeScreen;
