import React from 'react';

import {Config, DocumentView, RNPdftron} from 'react-native-pdftron';

const App = () => {
  RNPdftron.initialize('KEY_GOES_HERE');

  const path = 'https://pdftron.s3.amazonaws.com/downloads/pdfref.pdf';

  const toolbar = {
    [Config.CustomToolbarKey.Id]: 'toolbar',
    [Config.CustomToolbarKey.Name]: 'toolbar',
    [Config.CustomToolbarKey.Items]: [
      Config.Tools.annotationCreateRectangle,
      Config.Buttons.undo,
      Config.Buttons.redo,
    ],
  };

  return (
    <DocumentView
      annotationListEditingEnabled={false}
      annotationToolbars={[toolbar]}
      annotationMenuItems={[
        Config.AnnotationMenu.style,
        Config.AnnotationMenu.delete,
        Config.AnnotationMenu.editText,
      ]}
      disabledElements={[Config.Buttons.editMenuButton]}
      followSystemDarkMode={false}
      bottomToolbarEnabled={false}
      document={path}
      documentSliderEnabled={false}
      hideToolbarsOnTap={false}
      hideTopAppNavBar={true}
      longPressMenuEnabled={false}
      pageIndicatorEnabled={false}
      showLeadingNavButton={false}
      topAppNavBarRightBar={[]}
    />
  );
};

export default App;
