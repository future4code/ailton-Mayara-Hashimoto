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

export default class Etapa1 extends React.Component {

    state ={
      etapaDois: false,
    };
    
    etapaDois = () => {
      this.setState({
        formDois: !this.state.formDois
      });
    };

  render() {
    return (
      <div>
    <h2>Application Form</h2>
    <h3>Basic Informations!</h3>
 <input placeholder="Your name..">Your name: </input>
 <input placeholder="Age">Your age: </input>
 <input placeholder="example@gmail.com">Your e-mail: </input>
 <select name="scolarity">
        <option value="null">Scolarity</option>
        <option value="highschool">High School</option>
        <option value="ongoing">University (On Goiing)</option>
        <option value="finished">University (Complete)</option>
        <option value="dropped">University (Dropped)</option>
      </select>

      <button>Next</button>
      </div>
    )
  }
}
