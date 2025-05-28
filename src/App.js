import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Views/Header/Header';
import Footer from './Views/Footer/Footer';
import Home from './Views/Home/Home';
import Features from './Views/Features/Features';
import Training from './Views/Training/Training';
import Analytics from './Views/Analytics/Analytics';
import About from './Views/About/About';
import GetStarted from './Views/GetStarted/GetStarted';
import Signup from './Views/Auth/Signup';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/training" element={<Training />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
