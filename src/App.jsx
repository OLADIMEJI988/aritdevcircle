import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css' 
import LandingPage from './pages/LandingPage';
import CardSlider from "./components/CardSlider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
