import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ Import the Footer
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects.jsx';
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Router>
      <div className="font-sans flex flex-col min-h-screen">
        <Navbar />
        
        {/* Main content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer /> {/* ✅ Add footer after routes */}
      </div>
    </Router>
  );
}

export default App;
