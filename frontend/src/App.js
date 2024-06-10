import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

// Components
import HelloWorld from './pages/HelloWorld';
import ShowQRCode from './pages/QRCode';
import Graphics from './pages/Graphics';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HelloWorld />} />
          <Route path="/qrcode" element={<ShowQRCode />} />
          <Route path="/graphics" element={<Graphics />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
