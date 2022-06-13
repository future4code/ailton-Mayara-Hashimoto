import React from 'react'
import styled from 'styled-components'

const Input = styled.input `
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`
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

export default class Final extends React.Component {
  render() {
    return (
      <div>
<h1>THANK YOU for showing interest on working with us!</h1>
<h2> We will check your informations and get back to you, as soon as possible!</h2>
<h4>Fell free to go back to our home page now, or take a look at our avaliable oportunities</h4>

<button>Go Back</button> <button>Oportunities</button>
      </div>
    )
  }
}
