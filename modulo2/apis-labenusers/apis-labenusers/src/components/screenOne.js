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
height: 75vh;
padding: 10px;
padding-top: 25px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  margin: 0 auto;
  padding: 30px;

  div {
    margin-bottom: 15px;
  }
`
const Back = styled.div `
background-color: #90e0ef;
height: 100vh;
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
  background-color: #0081a7;
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
  background-color: #0081a7;
  color: #edf6f9;
  margin: 5px;
  font-weight: bold;
  border-color: #006d77;
`
const Header = styled.h1 `
color: #83c5be;
`

export class ScreenOne extends React.Component {
  


  render () {
    return (
      <Back>
      <MainContainer>
        <ButtonCheck onClick={this.props.goScreenTwo}>Check Users List</ButtonCheck>
        <Header>SignUp</Header>
        <label>Name: 
        <InputNome value={this.props.inputName} onChange={this.props.onChangeName} placeholder="Full Name"/> 
        </label>
        <div>
        <label>E-mail: 
        <InputEmail value={this.props.inputEmail} onChange={this.props.onChangeEmail} placeholder="E-mail"/>
        </label>
        </div>
        <div>
        <Button onClick={this.props.postUsers}>Send</Button>
        </div>
        
      </MainContainer>
      </Back>
    )
  }

}