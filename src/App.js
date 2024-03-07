import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from "./components/Home";

function App() {
  return (
   <div>
    <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<Home />} />
   </Routes>
   </BrowserRouter>
   </div>
    
  );
}

export default App;
