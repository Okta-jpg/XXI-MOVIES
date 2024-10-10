import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Popular from './components/Popular';
import TopRated from './components/TopRated.jsx';
import Upcoming from './components/UpComing.jsx';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/top-rated" element={<TopRated />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;