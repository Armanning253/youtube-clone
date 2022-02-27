import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// --------- COMPONENTS -------------- //
import VideoConsole from './pages/videoConsole/VideoConsole.page';
import Search from './search/Search.component';

// ------------ STYLES ---------- //
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> App</h1>
      <Search />
      <VideoConsole />


    </div>
  );
}

export default App;
