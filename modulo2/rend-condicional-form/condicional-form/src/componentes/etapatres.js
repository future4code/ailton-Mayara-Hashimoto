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

export default class Etapa3 extends React.Component {
    state = {
      etapaFinal: false,
    }

    etapaFinal = () => {
      this.setState({
        final: !this.state.final
      });
    };

  render() {

    
    return (
      <div>
<h2>Application Form</h2>
    <h3>Just a bit more information!</h3>
 <input placeholder="Why?">If you dropped out, tell us the reason why: </input>
 <p>Did you studying anything else? (Extra Courses)</p>
 <select name="extra">
        <option value="yes">Yes.</option>
        <option value="no">I have not</option>
        <option value="thinking">Thinking about it</option>
        <option value="finished">I am doing it, at the moment</option>
      </select>
        
 <button>Next</button>
      </div>
    )
  }
}
