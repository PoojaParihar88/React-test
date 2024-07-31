import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import About from './components/About';

const App = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
