import React from 'react';

import {Config, DocumentView, RNPdftron} from 'react-native-pdftron';

const App = () => {
  RNPdftron.initialize('KEY_GOES_HERE');

  const path = 'https://pdftron.s3.amazonaws.com/downloads/pdfref.pdf';

  return (
    <DocumentView
      bottomToolbarEnabled={false}
      document={path}
      followSystemDarkMode={false}
      hideToolbarsOnTap={false}
      hideTopAppNavBar={true} // Not working when bottomToolbarEnabled={false} hides all of top bar
    />
  );
};

export default App;
