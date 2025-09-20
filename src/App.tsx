import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SchoolDetailsPage from './pages/Facilities';
import Academics from './pages/Academics';
import Contact from './pages/Contact';
import AlumniYear from './pages/AlumniYear';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/facilities" element={<SchoolDetailsPage />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/alumni" element={<AlumniYear />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
