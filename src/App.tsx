import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TeamManagement from "./pages/TeamManagement";
import CardSale from "./pages/CardSale";
import Layout from "./components/common/Layout/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/team" element={<TeamManagement />} />
          <Route path="/cardsale" element={<CardSale />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
