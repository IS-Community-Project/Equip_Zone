import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Dashboard2 from './pages/admin/dashboard2'; 
import Dashboard3 from './pages/admin/dashboard3'; 
import RemainItems1 from './pages/admin/remain_items1';
import ReserveEquipment from './pages/admin/remain_items2';
import BorrowedItems2 from './pages/admin/borrowed_items2';

import Sidebar from './pages/admin/sidebar';
import RegistrationPage from './pages/user/Register';
import Home from './pages/user/Home';
import Dashboard1 from './pages/admin/dashboard1';
import BorrowedItems1 from './pages/admin/borrowed_items1';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />ssss
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>

            <Route path="/" element={<Navigate to="/dashboard1" />} />
            <Route path="/dashboard3" element={<Dashboard3 />} />
            <Route path="/dashboard2" element={<Dashboard2 />} />
            <Route path="/remain_items1" element={<RemainItems1 />} />
            <Route path="/borrowed_items2" element={<BorrowedItems2 />} />
            <Route path="/Register" element={<RegistrationPage />} />
            <Route path="/remain_items2" element={< ReserveEquipment/>} />
            <Route path="/Home" element={<Home />} />
            <Route path="/dashboard1" element={<Dashboard1 />} />
            <Route path="/borrowed_items1" element={<BorrowedItems1/>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
