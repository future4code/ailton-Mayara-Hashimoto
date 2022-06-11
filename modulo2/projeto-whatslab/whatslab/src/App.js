import React from "react";
import styled from 'styled-components'
// import styled from "./App.css"



const Container = styled.div `
    justify-content: center;
    align-items: center;
    height: 100%;
    border: 1px solid #ffe4c4;
    background-color: beige;
    `
const Title = styled.h1 `
    color: #dda0dd;
    display: flex;
    justify-content: center;

`
const Messages = styled.div`
  width: 500px;
  height: 660px;
  margin: 5px auto;
  background-color: #D8C39A;
  padding: 5px;
  text-align: flex-start;
  color: rgb(0, 0, 0);
  `
  const Users = styled.img `
    border-radius: 4px;
    align-items: center;
    justify-content: center;
  `
const Username = styled.input `
    display: flex;
    border: 2px solid rgb(194, 148, 148);
    border-radius: 4px;
    justify-content: space-between;
    width: 100px;
    height: 30px;
  `
const MessageBox = styled.input `
    display: flex;
    border: 2px solid rgb(194, 148, 148);
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 250px;
    height: 30px;
`
const Footer = styled.footer `
    display: flex;
    justify-content: center;
    position: bottom;
`
const Button = styled.button `
    background-color: #dda0dd;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 4px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
`
const Text = styled.div`
background-color: whitesmoke;
border-radius: 4px;
align-items: center;
flex-direction: column;
width: auto;
height: 5%;
`
const UserMessage = styled.div`
  flex-direction: column;
  color: black;
  padding: 0.5px 5px;
  background-color: #dda0dd;
  border-radius: 10px;
  margin: 5px;
`

class App extends React.Component {
  state = {
    
    usuario: [
      {
        nome: <Users src='https://i.im.ge/2022/06/12/rHjSIx.png' />,
        message: <Text>Welcome to BubblesChat Stay! Here you can actually talk to us when we're avaliable! For a limited amout of time!</Text>
      },
      {
        nome: <Users src='https://i.im.ge/2022/06/12/rHj7PS.png' />,
        message: <Text>Hi Stayy...</Text>
      },  
      {
        nome: <Users src='https://i.im.ge/2022/06/12/rHjady.png' />,
        message: <Text>Hello!!!</Text>
      }, 
      {
        nome: <Users src='https://i.im.ge/2022/06/12/rHjqJJ.png' />,
        message: <Text>STAAAY!!!</Text>
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
        
        <UserMessage>
         <strong> {user.nome} </strong>
         <p> {user.message} </p>
        </UserMessage>
      );
    });


    return (
      <Container>
       
        <Title>Bubbles: SKZ [Wolfgang Chat]</Title>
        <div>
          
        <Messages>{historico}</Messages>
        
        <Footer>
          
          <Username
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuario"}
          />

          <MessageBox
            value={this.state.valorInputMessage}
            onChange={this.onChangeInputMessage}
            placeholder={"Message"}
          />

          <Button onClick={this.adicionaUsuario}>Enviar</Button>
          </Footer>
        </div>
        
      </Container>
    );
  }
}

export default App;
