import React from "react";
import styled from "./App.css"


class App extends React.Component {
  state = {
    
    usuario: [
      {
        nome: "Bang Chan",
        message: "Welcome to The Wolfgang Chat!!"
      },
      {
        nome: "Hyunjin",
        message: "Hi babyy..."
      },  
      {
        nome: "Yang Jeong In",
        message: "Hello!!!"
      }

    ],
    
    valorInputUsuario: "",
    valorInputMessage: ""
  };

  adicionaUsuario = () => {
  
    const novaConta = {
      nome: this.state.valorInputUsuario,
      message: this.state.valorInputMessage
    };


    const novoUsuario = [...this.state.usuario, novaConta];
    this.setState({ usuario: novoUsuario });
    this.setState({ valorInputUsuario: ""})
    this.setState({ valorInputMessage: ""})
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });

  };

  onChangeInputMessage = (event) => {
    this.setState({ valorInputMessage: event.target.value });

  

  };
  
  render() {

    const historico = this.state.usuario.map((user) => {
      return (
        <p>
          {user.nome} - {user.message}
        </p>
      );
    });

    return (
      <div className="container">
       
        <h1 className="header">Bubbles: Wolfgang Chat</h1>
        <div>
        <p className="box">{historico}</p>
        <footer>
          <input className="boxdois"
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuario"}
          />
          <input className="boxtres"
            value={this.state.valorInputMessage}
            onChange={this.onChangeInputMessage}
            placeholder={"Message"}
          />
          <button onClick={this.adicionaUsuario}>Enviar</button>
          </footer>
        </div>
        
      </div>
    );
  }
}

export default App;
