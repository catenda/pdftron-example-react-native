import React from 'react';
import {Config, DocumentView} from 'react-native-pdftron';

const DocumentScreen = () => {
  const path = 'https://pdftron.s3.amazonaws.com/downloads/pdfref.pdf';

  return (
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
    />
  );
};

export default DocumentScreen;
