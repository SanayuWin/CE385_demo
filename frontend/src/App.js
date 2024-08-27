import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

// Components
import HelloWorld from './pages/helloWorld';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HelloWorld />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
