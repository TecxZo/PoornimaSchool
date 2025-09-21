import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
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

const Layout: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <ScrollToTop />
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<SchoolDetailsPage />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/alumni" element={<AlumniYear />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
