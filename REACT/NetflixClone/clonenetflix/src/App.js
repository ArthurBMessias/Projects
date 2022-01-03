import React from 'react';
import './App.css'
import ProviderContent from './Context/ProviderContent';
import Home from './Pages/Home';

function App() {
  return <ProviderContent>
    <Home />
  </ProviderContent>;
}

export default App;
