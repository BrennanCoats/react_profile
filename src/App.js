import React from 'react';
import {Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './styles/Main.css';


function App() {


  return (
    <Router>
    <React.Fragment>
			<Navbar/>
		</React.Fragment>
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Resume" element={<Resume />}/>
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
