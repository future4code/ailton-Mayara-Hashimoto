import React from "react";
import axios from 'axios';
import styled from "styled-components";


const MainContainer = styled.div `
background-color: #ffddd2;
/* height: 96vh; */
padding: 10px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
overflow: auto;
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
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: #00afb9; }
::-webkit-scrollbar-thumb { background: #f07167; }
::-webkit-scrollbar-thumb:hover { background: #f07167; }
`
const Back = styled.div `
background-color: #90e0ef;
height: 100vh;
`

const Button = styled.button `
  width: 150px;
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #0081a7;
  color: #edf6f9;
  margin: 5px;
  border-color: #006d77;
  font-weight: bold;
`
const DelButton = styled.button`
background-color: #0081a7;
color: #edf6f9;
border-radius: 5px;
font-weight: bold;
border-color: #006d77;
display: flex;
justify-content: left;
`
const Header = styled.h1 `
color: #83c5be;
`


export class ScreenTwo extends React.Component {


  
    render () {

        const userNames = this.props.userList.map((user) => {
            return <p>{user.name}  <DelButton onClick={() => {this.props.delUsers(user.id)}}>Delete</DelButton></p>
        })
        
        return (
            <Back>
            <MainContainer>
                <Button onClick={this.props.goScreenOne}>Go Back</Button>
                
                <Header>UsersList</Header>
                <div>
            </div>
                <div>{userNames}</div>
          
               
            </MainContainer>
            </Back>
        )

    }

}