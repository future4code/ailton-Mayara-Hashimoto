import React from 'react'
import styled from 'styled-components'
import { Component } from 'react'



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
const Input = styled.input `
border-radius:  5px;
`
const Diva = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`


export default class App extends Component {
  state = {
    tela: "formUm"
  };

  etapaDois = () => {
    this.setState({tela: "home"});
    };   
  etapaUm = () => {
    this.setState({tela: "etapaUm"});
  };

  escolheForm = () => {
    switch (this.state.tela) {
      case "formUm":
        return <Etapa1 etapaDois={this.etapaDois} />;
        break;
      case "home":
        return <Etapa3 etapaUm={this.etapaUm} />;
        break;
    }
  };

  render() {
    return <div>
     <center> <h1>Welcome!</h1>
      <h4>Please fill all requirements with attention!</h4>
      {this.escolheForm()} </center>
      </div>;
  }
}

class Etapa1 extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Application Form</h2>
          <h3>Basic Informations!</h3>
        </div>
        <form>
        <p><label> Name:<input type="text" name="name" placeholder="Full Name..." /></label></p>
        </form>
        <form> 
        <p><label>Age: <input type="text" name="age" placeholder="Your age..." /> </label></p> 
        </form>    
         <form> 
         <p><label>E-mail:<input type="text" name="name" placeholder="email@gmail.com" /></label></p>
        </form>
        <p><label>Scolarity: </label> 
           <select>
          <option value="highschool">High School</option>
          <option value="highchoolt">High School (OnGoing)</option>
          <option value="uni">University (Finished)</option>
          <option value="uni">University (OnGoing)</option>
          <option value="uni">University (DroppedOut)</option>
        </select> </p>  
        <div>
          <button onClick={this.props.etapaDois}>Next Step</button>
        </div>
      </div>     
    );
  }
}


class Etapa3 extends Component {
  state = {
    more: false
  };

  mostraMore = () => {
    this.setState({ more: !this.state.more });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Application Form</h2>
          <h3>Scolarity Informations!</h3>
        </div>
        <form>
        <p><label>Course: <input type="text" name="course" placeholder="What did or do you study?" />
          </label></p>   
        </form>       
       <form>      
       <p><label>University / School: <input type="text" name="school" placeholder="Where you're studying at?"/>
        </label> </p>  
       </form>    
       <p> <button onClick={this.mostraMore}>
          {this.state.more ? "Hide More" : "More Needed"}
         </button></p>
        <div>
          {this.state.more && <Etapa2 />}
          <p> Please fill all the information required!</p>
          <p>
            {" "}
            The more information you provide us, the quicker we can find you a
            sopt!
          </p>
          <p><button onClick={this.props.etapaFinal}>Finish</button></p>
        </div>
      </div> 
    );
  }
}

class Etapa2 extends Component {
  render() {
    return (
      <div>
        <div>
          <h4>Please don't forget these!</h4>
        </div>
        <form>
        <p><label> If you did't finish School or University:
           <input type="text" name="more" placeholder="Why did you drop out?"/>
           </label> </p>
        </form>    
        <form> <p>
          <label> Are you doing any extra Course?<input type="text" name="school" placeholder="Where you're studying at?"/>
          </label> </p>
        </form>    
        </div>     
    );
  }
}

class Final extends Component {
  state = {
    final: "telaFinal"
  };

  etapaFinal = () => {
    this.setState({ final: !this.state.final });
  };

  ultima = () => {
   if (this.state.final || true) {
      return <Etapa2 etapaFinal={this.etapaFinal} />;   
    }
  };
  render() {
    return (
      <div>
        <h1>THANK YOU for showing interest in working with us.</h1>
        <p>We will work hard to get back to you as soon as possible!</p>
      </div>
    );
  }
}
