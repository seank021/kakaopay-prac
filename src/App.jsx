import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import ItemPage from './routes/ItemPage';
import PointPage from './routes/PointPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item" element={<ItemPage />} />
          <Route path="/point" element={<PointPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
