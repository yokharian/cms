import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import SignIn from './pages/signin';
import Home from './pages/home';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/signIn" element={<SignIn />}/>
          <Route path="*" element={<h1>Pagina no encontrada</h1>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
