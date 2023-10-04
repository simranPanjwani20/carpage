import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllCars from '../src/Pages/allCars'; // Import your AllCars component here

function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<AllCars/>}/>
    <Route exact path="/page/:page"  element={<AllCars/>}  />
  </Routes>
    </Router>
  );
}

export default App;


