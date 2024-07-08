import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import Loads from './Component/Loads';
import Statements from './Component/Statements';
import Transactions from './Component/Transactions';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/loads" element={<Loads />} />
            <Route path="/statements" element={<Statements />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
