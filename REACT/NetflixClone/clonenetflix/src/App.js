import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import ProviderContent from './Context/ProviderContent';
import Home from './Pages/Home';
import LandPage from './Pages/LandPage';

function App() {
  return (
    <ProviderContent>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ProviderContent>
  );
}

export default App;
