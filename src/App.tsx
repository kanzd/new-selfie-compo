import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Selfie from "./Components/Selfie/index";
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Selfie />}>

     </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
