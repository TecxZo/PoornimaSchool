import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SchoolDetailsPage from './pages/Facilities';
import Academics from './pages/Academics';
import Contact from './pages/Contact';
import AlumniYear from './pages/AlumniYear';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/home"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/facilities"
          element={
            <>
              <Header />
              <SchoolDetailsPage />
              <Footer />
            </>
          }
        />
        <Route path="/academics"
          element={
            <>
              <Header />
              <Academics />
              <Footer />
            </>
          }
        />
        <Route path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/alumni"
          element={
            <>
              <Header />
              <AlumniYear />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
