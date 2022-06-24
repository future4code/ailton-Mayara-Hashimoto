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


export default class Playlists extends Component {
  render() {
    return (
      <div>
             <div>
        <h3>create your playlist:</h3>
        <div>
            <Input placeholder='artist:'/>
        </div>
        <div>
            <Input placeholder='song name:'/>
        </div>
        <div>
            <Input placeholder='song link:'/>
        </div>
        <div>
            <Button>send it in!</Button>
        </div>

      </div>
      </div>
    )
  }
}
