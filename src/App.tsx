import React from 'react';

import Layout from './components/Layout';
import GlobalStyle from './styles/GobalStyle';

function App() {
  return (
    <>
      {/* for this simple app I created a "Layout" component for a better
      app organization */}
      <Layout />

      {/* I like creating a global style in order to create a pattern for
      colors, box-sizing and font styles */}
      <GlobalStyle />
    </>
  );
}

export default App;
