import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InvestPage from './pages/InvestPage';
import FunctioningPage from './pages/FunctioningPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/functioning" element={<FunctioningPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer /> {/* Footer should be inside Router */}
    </Router>
  );
}

export default App;
