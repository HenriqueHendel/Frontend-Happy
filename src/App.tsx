import React from 'react';

import Landing from './pages/Landing';

import CreateGlobalStyle from './styles/global';


const App: React.FC = () => {
  return (
    <>
      <CreateGlobalStyle />
      <Landing />
    </>
  );
}

export default App;