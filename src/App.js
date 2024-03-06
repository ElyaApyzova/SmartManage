import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header';

function App() {
  return (
   <div>
    <BrowserRouter>
   <Header />
   </BrowserRouter>
   </div>
    
  );
}

export default App;
