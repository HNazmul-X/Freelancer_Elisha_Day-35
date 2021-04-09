import React, { createContext, useState } from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import './App.css';
import MyRouter from './Components/MyRouter/MyRouter';


export const EssentialContext = createContext()
function App() {
  const [essentialContext , setEssentialContext] = useState({
    isFormShown: false,
  })



  return ( 
      <EssentialContext.Provider value={[essentialContext, setEssentialContext]}>
          <Router>
              <MyRouter />
          </Router>
      </EssentialContext.Provider>
  );
}

export default App;
