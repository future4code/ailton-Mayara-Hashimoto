import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [tela, setTela] = useState("matchScreen")

  return (
    <div>

<h1> TEST </h1>
  <button>MatchScreen</button>
  <p>Card Imagens</p>
  <button>Clear Cache</button>

    </div>
  );
}

export default App;
