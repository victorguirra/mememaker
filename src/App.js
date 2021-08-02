import React from 'react';

import { MemeProvider } from './contexts/memeContext';

import GlobalStyles from './styles/global.js'
import Routes from './routes';

function App() {
  return (
   <MemeProvider>
      <GlobalStyles />
      <Routes />
   </MemeProvider>
  );
}

export default App;
