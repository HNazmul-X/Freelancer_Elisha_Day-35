import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import './App.css';
import MyRouter from './Components/MyRouter/MyRouter';

function App() {
  return (
    <Router>
      <MyRouter/>
      
    </Router>
  );
}

export default App;
