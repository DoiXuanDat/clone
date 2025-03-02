import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ImportText from './pages/importText/ImportText';
import TextToSpeech from './pages/textToSpeech/TextToSpeech';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <Link to="/">Subtitle Editor</Link>
          <Link to="/text-to-speech">Text to Speech</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ImportText />} />
          <Route path="/text-to-speech" element={<TextToSpeech />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;