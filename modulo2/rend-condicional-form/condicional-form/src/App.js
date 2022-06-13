import React from 'react'
import styled from 'styled-components'
import Etapa1 from './componentes/estapadois';
import Etapa2 from './componentes/etapaum';
import Etapa3 from './componentes/etapatres';
import Final from './componentes/final'

const Bg = styled.div `
background-color: #dbceb0;
display: flex;
justify-content: center;
align-items: center;
`
const Button = styled.button `
  background-color: #ffef96;
  border-radius: 5px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`


export default class App extends React.Component {
  state = {
    etapaUm: false,
  };

  etapaUm = () => {
    this.setState({
      formUm: !this.state.formUm
    });
  };


  render() {
   
    return (
    
      <div>
        <div>
        <h1>Welcome!!!</h1>
        <h2>We just started our recruiting season!</h2>
        <h3>Fill the form and let's get to work!</h3>
      <button> Start </button>
     </div>

      
      </div>
    )
  }
}


