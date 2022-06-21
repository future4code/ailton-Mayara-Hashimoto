import React from "react";
import axios from 'axios';
import styled from "styled-components";
import { ScreenOne } from "./screenOne";

const MainContainer = styled.div `
background-color: #ffddd2;
height: 100vh;
padding: 10px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

const Button = styled.button `
  width: 150px;
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #006d77;
  color: #edf6f9;
  margin: 5px;
  border-color: #006d77;
  font-weight: bold;
`
const DelButton = styled.button`
background-color: #006d77;
color: #edf6f9;
border-radius: 5px;
font-weight: bold;
border-color: #006d77;
`
const Header = styled.h1 `
color: #83c5be;
`

export class ScreenTwo extends React.Component {


    deleteUsers = () => {
        const body = {
            name: this.state.inputName
        };
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id", body,
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

    }

    render () {
        
        return (
            <MainContainer>
                <Button onClick={this.props.goScreenOne}>Go Back</Button>
                <Header>UsersList</Header>
                
                {/* <DelButton onClick={this.deleteUsers}>Delete</DelButton> */}
            </MainContainer>
        )

    }

}