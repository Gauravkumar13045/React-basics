import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Welcome to Home Page</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function Contact() {
  return <h2>Contact Us</h2>;
}

export default function App() {
  return (
    <Router>
      <nav style={{ padding: 20, backgroundColor: '#eee' }}>
        <Link to="/" style={{ margin: 10 }}>Home</Link>
        <Link to="/about" style={{ margin: 10 }}>About</Link>
        <Link to="/contact" style={{ margin: 10 }}>Contact</Link>
      </nav>
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
