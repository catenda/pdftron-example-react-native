import React from 'react';

import {DocumentView, RNPdftron} from 'react-native-pdftron';

const App = () => {
  RNPdftron.initialize('KEY_GOES_HERE');

  const path = 'https://pdftron.s3.amazonaws.com/downloads/pdfref.pdf';

  return <DocumentView followSystemDarkMode={false} document={path} />;
};

export default App;
