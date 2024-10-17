import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import ShipmentTracking from './components/ShipmentTracking';
import DocumentManagement from './components/DocumentManagement';
import Communication from './components/Communication';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shipments" element={<ShipmentTracking />} />
            <Route path="/documents" element={<DocumentManagement />} />
            <Route path="/communication" element={<Communication />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;