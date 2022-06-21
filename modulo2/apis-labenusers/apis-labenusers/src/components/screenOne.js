import React from "react";
import axios from "axios";
import styled from "styled-components";

const InputNome = styled.input `
  width: 200px;
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: 5px;
  box-sizing: border-box;
  border-color: pink;
`
const MainContainer = styled.div `
background-color: #e29578;
height: 100vh;
padding: 10px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

`

const InputEmail = styled.input `
  width: 200px;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 5px;
  box-sizing: border-box;
  border-color: pink;
`

const Button = styled.button `
  width: 100px;
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #006d77;
  color: #edf6f9;
  margin: 5px;
  border-color: pink;
  font-weight: bold;
`
const ButtonCheck = styled.button `
  width: 150px;
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #006d77;
  color: #edf6f9;
  margin: 5px;
  font-weight: bold;
  border-color: #006d77;
`
const Header = styled.h1 `
color: #83c5be;
`

export class ScreenOne extends React.Component {
  
  state = {
    users: [],
    inputName: "",
    inputEmail:"",
  };

  onChangeName = (event) => {
    this.setState({inputName: event.target.value})
  };
  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  };
  


  postUsers = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };
    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
      {
        headers: {
          Authorization: "mayara-hashimoto-ailton"
        } 
      })
      .then((response) => {
      window.alert(response.message)
    }).catch((error) => {
      window.alert(error.message)
    });
  };


  render () {
    return (
      <MainContainer>
        <ButtonCheck onClick={this.props.goScreenTwo}>Check Users List</ButtonCheck>
        <Header>SignUp</Header>
        <label>Name: 
        <InputNome value={this.state.inputName} onChange={this.onChangeName} placeholder="Full Name"/> 
        </label>
        <div>
        <label>E-mail: 
        <InputEmail value={this.state.inputEmail} onChange={this.onChangeEmail} placeholder="E-mail"/>
        </label>
        </div>
        <div>
        <Button onClick={this.postUsers}>Send</Button>
        </div>
        <div>
        
        </div>
      </MainContainer>
    )
  }

}