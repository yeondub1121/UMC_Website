import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Project from './pages/Project';
import Recruit from './pages/Recruit';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 290px)' }}>
   
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/recruit" element={<Recruit />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
