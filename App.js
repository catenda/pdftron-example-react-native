import React from 'react';

import {Config, DocumentView, RNPdftron} from 'react-native-pdftron';

const App = () => {
  RNPdftron.initialize('KEY_GOES_HERE');

  const path =
    'https://raw.githubusercontent.com/catenda/pdftron-example-react-native/main/files/image.jpg';

  const toolbar = {
    [Config.CustomToolbarKey.Id]: 'toolbar',
    [Config.CustomToolbarKey.Name]: 'toolbar',
    [Config.CustomToolbarKey.Icon]: Config.ToolbarIcons.Draw,
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
      bottomToolbar={[
        Config.Buttons.viewControlsButton,
        Config.Buttons.thumbnailsButton,
        Config.Buttons.searchButton,
      ]}
      defaultEraserType={Config.EraserType.hybrideEraser}
      disabledElements={[Config.Buttons.editMenuButton]}
      document={path}
      documentSliderEnabled={false}
      followSystemDarkMode={false}
      hideScrollbars={true}
      hideToolbarsOnTap={false}
      hideTopAppNavBar={true}
      hideViewModeItems={[Config.ViewModePickerItem.Crop]}
      longPressMenuEnabled={false}
      pageIndicatorEnabled={false}
      showLeadingNavButton={false}
      topAppNavBarRightBar={[]}
    />
  );
};

export default App;
