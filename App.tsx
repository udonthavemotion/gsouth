import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import HomeDetails from './pages/HomeDetails';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SingleWide from './pages/SingleWide';
import LandHome from './pages/LandHome';
import Parts from './pages/Parts';
import DoubleWide from './pages/DoubleWide';
import DoubleWideDetail from './pages/DoubleWideDetail';
import Modular from './pages/Modular';
import ModularDetail from './pages/ModularDetail';
import Deals from './pages/Deals';
import LARestore from './pages/LARestore';
import Insurance from './pages/Insurance';
import Manufacturers from './pages/Manufacturers';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-stone-800 bg-stone-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<HomeDetails />} />
            <Route path="/single-wide" element={<SingleWide />} />
            <Route path="/double-wide" element={<DoubleWide />} />
            <Route path="/double-wide/:id" element={<DoubleWideDetail />} />
            <Route path="/modular-homes" element={<Modular />} />
            <Route path="/modular-homes/:id" element={<ModularDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/financing" element={<Services />} />
            <Route path="/land-home" element={<LandHome />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/la-restore" element={<LARestore />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/manufacturers" element={<Manufacturers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
