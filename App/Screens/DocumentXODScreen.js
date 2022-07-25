import React, {useEffect, useState} from 'react';
import {Dirs, FileSystem} from 'react-native-file-access';
import {Config, DocumentView, RNPdftron} from 'react-native-pdftron';

const DocumentXODScreen = () => {
  const [isReadyToRender, setIsReadyToRender] = useState(false);

  useEffect(() => {
    console.log(Dirs.MainBundleDir);
    FileSystem.cpAsset('test.xod', Dirs.CacheDir + 'test.xod').then(() => {
      RNPdftron.clearSavedViewerState().then(() => {
        setIsReadyToRender(true);
      });
    });
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
      document={Dirs.CacheDir + 'test.xod'}
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

export default DocumentXODScreen;
