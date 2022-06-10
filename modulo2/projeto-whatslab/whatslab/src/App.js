import React from "react";
import styled from "./App.css"
import styles  from './components/styles.js'


class App extends React.Component {
  state = {
    
    usuario: [
      {
        nome: <img className="profile" src='https://i.pinimg.com/736x/22/b1/f7/22b1f70c8866bf10ccfea6ab21ec5db1.jpg' />,
        message: <img src='https://i.im.ge/2022/06/11/rzZk7h.jpg' />
      },
      {
        nome: <img className="profile" src='https://i.pinimg.com/originals/b8/45/ec/b845ec72d1c359eba9a3a74b271bf53c.jpg' />,
        message: "Hi babyy..."
      },  
      {
        nome: <img className="profile" src='https://i.pinimg.com/originals/17/74/d3/1774d302358bbe55cc10feeaf6d6d3b6.jpg' />,
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
