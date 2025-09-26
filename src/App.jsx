import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css' 
import LandingPage from './pages/LandingPage';
import ScrollToTop from "./components/ScrollToTop";
import HackathonPageRework from "./pages/HackathonPageRework";
import Rules from "./pages/Rules";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hackathon" element={<HackathonPageRework />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
