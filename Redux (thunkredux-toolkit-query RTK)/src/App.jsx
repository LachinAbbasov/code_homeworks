
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sliders from './pages/Slider';
import Detail from './pages/Detail';
import Add from './pages/Add';

function App() {
  return (
    <>
      <Router>
        <Navbar />
       
        <Routes> 
          <Route path="/sliders" element={<Sliders />} /> 
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
        </Routes> 
      </Router>
    </>
  );
}

export default App;
