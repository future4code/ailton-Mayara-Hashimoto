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

export default class Etapa2 extends React.Component {
    state = {
      etapaTres: false,
    };

    etapaTres = () => {
      this.setState({
        formTres: !this.state.formTres
      });
    };

  render() {
    return (
      <div>
<h2>Application Form</h2>
    <h3>We're nearly done! Tell us whtat and where...</h3>
 <input placeholder="What are you studying?">Course Name: </input>
 <input placeholder="Where?">University Name: </input>
        
 <button>Next</button>
      </div>
    )
  }
}
