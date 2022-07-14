import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {Config, DocumentView, RNPdftron} from 'react-native-pdftron';

const DocumentScreen = () => {
  const [isReadyToRender, setIsReadyToRender] = useState(
    Platform.OS !== 'android',
  );

  const path = 'https://pdftron.s3.amazonaws.com/downloads/pdfref.pdf';

  useEffect(() => {
    if (Platform.OS === 'android') {
      RNPdftron.clearSavedViewerState().then(() => {
        setIsReadyToRender(true);
      });
    }
  }, []);

  const onDocumentError = error => {
    console.log('Error:', error);
  };

  const onDocumentLoaded = () => {
    console.log('Document loaded.');
  };

  return isReadyToRender ? (
    <DocumentView
      annotationToolbars={[]}
      bottomToolbar={[
        Config.Buttons.viewControlsButton,
        Config.Buttons.thumbnailsButton,
        Config.Buttons.searchButton,
      ]}
      bottomToolbarEnabled={false}
      disabledElements={[Config.Buttons.listsButton]}
      document={path}
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
      saveStateEnabled={true}
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
  ) : null;
};

export default DocumentScreen;
