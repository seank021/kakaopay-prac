import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './routes/Header';
import HomePage from './routes/HomePage';
import ItemPage from './routes/ItemPage';
import PointPage from './routes/PointPage';
import PointApprovalPage from './routes/PointApprovalPage';
import PointCancelPage from './routes/PointCancelPage';
import PointFailPage from './routes/PointFailPage';

export default function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item" element={<ItemPage />} />
          <Route path="/point" element={<PointPage />} />
          <Route path="/approval" element={<PointApprovalPage />} />
          <Route path="/cancel" element={<PointCancelPage />} />
          <Route path="/fail" element={<PointFailPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
