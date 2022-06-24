import React, { Component } from 'react'
import styled from 'styled-components'


const Input = styled.input `
width: 200px;
height: 35px;
border-radius: 5px;
`
const Button = styled.button` 
background-color: pink;
border: none;
padding: 5px;
margin: 5px;
height: 30px;
width: 150px;
border-radius: 5px;
`

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <h3>become part of the family, and rock your sound!</h3>
        <div>
            <Input placeholder='full name...'/>
        </div>
        <div>
            <Input placeholder='email...'/>
        </div>
        <div>
            <Button>join in!</Button>
        </div>

      </div>
    )
  }
}
