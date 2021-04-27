import React from 'react';

import {Config, DocumentView, RNPdftron} from 'react-native-pdftron';

const App = () => {
  RNPdftron.initialize('KEY_GOES_HERE');

  const path = 'https://pdftron.s3.amazonaws.com/downloads/pdfref.pdf';

  return (
    <DocumentView
      document={path}
      followSystemDarkMode={false}
      hideTopToolbars={true} // Setting to true causes memory access exception
      hideTopAppNavBar={true} // Setting to true causes memory access exception
    />
  );
};

export default App;
