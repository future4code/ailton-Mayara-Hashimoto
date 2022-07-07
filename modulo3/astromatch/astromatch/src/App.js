import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Home from './Components/Home'
import MatchScreen  from './Components/matchScreen'

function App() {
  const [tela, setTela] = useState("home")



  return (
    <div>
{tela === "home" && <Home setTela={setTela}/>}
{tela === "match" && <MatchScreen setTela={setTela}/>}

    </div>
  );
}

export default App;
