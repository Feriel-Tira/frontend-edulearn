import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardEtudiant from './pages/DashboardEtudiant';
import MesCours from './pages/MesCours';
import Quiz from './pages/Quiz';
import Progression from './pages/Progression';
import Profil from './pages/Profil';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DashboardEtudiant />} />
          <Route path="/dashboard" element={<DashboardEtudiant />} />
          <Route path="/cours" element={<MesCours />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/progression" element={<Progression />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;