// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';

import Projects from './pages/Projects';  // Import the Projects component
import Index from './pages/Index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} /> {/* Add route for Projects */}
      </Routes>
    </Router>
  );
};

export default App;
