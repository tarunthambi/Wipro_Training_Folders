// // src/App.js
import React from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { motion } from 'framer-motion';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Header/>
      <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </motion.div>
      <Footer/>
    </div>
  );
};

// Page transition variants and settings for animations using framer-motion
const pageVariants = {
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: "-100vw"
  }
};

const pageTransition = {
  type: "spring",
  stiffness: 50,
  damping: 20
};

export default App;
