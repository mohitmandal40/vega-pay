// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamManagement from './pages/TeamManagement';
import CardSale from './pages/CardSale';
import Sidebar from './components/common/Sidebar';
// import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/team" element={<TeamManagement />} />
        <Route path="/cardsale" element={<CardSale />} />
      </Routes>
    </Router>
  );
};

export default App;
