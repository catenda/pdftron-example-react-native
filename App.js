import React from 'react';

import {Config, DocumentView, RNPdftron} from 'react-native-pdftron';

const App = () => {
  RNPdftron.initialize('KEY_GOES_HERE');

  const path = 'https://pdftron.s3.amazonaws.com/downloads/pdfref.pdf';

  return (
    <DocumentView
      document={path}
      disabledElements={[Config.Buttons.reflowButton]}
      followSystemDarkMode={false}
      hideViewModeItems={[Config.ViewModePickerItem.Crop]}
      bottomToolbar={[Config.Buttons.viewControlsButton]}
    />
  );
};

export default App;
