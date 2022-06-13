import React from 'react'
import styled from 'styled-components'
import { Component } from 'react'


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


class Home extends Component {
  state = {
    more: false,
 
  };

  mostraMore = () => {
    this.setState({
      more: !this.state.more
    });
  };

 

  render() {
    return (
      <div>
        <div>
          <h2>Application Form</h2>
          <h3>Scolarity Informations!</h3>
        </div>
        <form>
          <label>
            Course:
            <input
              type="text"
              name="course"
              placeholder="What did or do you study?"
            />
          </label>
        </form>

        <form>
          <label>
            University / School:
            <input
              type="text"
              name="school"
              placeholder="Where you're studying at?"
            />
          </label>
        </form>
        <button onClick={this.mostraMore}>
          {this.state.more ? "Hide More" : "More Needed"}
        </button>
     
        
        <div>
          {this.state.more && <Etapa2 />}
          <p> Please fill all the information required!</p>
          <p> The more information you provide us, the quicker we can find you a sopt!</p>
          <button onClick={this.props.final}>Finish</button>
        </div>
      </div>
    );
  }
}

class Etapa2 extends Component {
  render() {
    return <div>
<div> 

          <h4>Please don't forget these!</h4>
        </div>
        <form>
          <label>
            If you did't finish School or University:
            <input
              type="text"
              name="more"
              placeholder="Why did you drop out?"
            />
          </label>
        </form>

        <form>
          <label>
            Are you doing any extra Course? 
           
            <input
              type="text"
              name="school"
              placeholder="Where you're studying at?"
            />
          </label>
        </form>


    </div>;
  }
}

class Etapa3 extends Component {
  render() {
    return (
      <div>
        <h1>Menssagens</h1>
        <p>0</p>
      </div>
    );
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
          <label>
            Name:
            <input type="text" name="name" placeholder="Full Name..." />
          </label>
        </form>

        <form>
          <label>
            Age:
            <input type="text" name="age" placeholder="Your age..." />
          </label>
        </form>

        <form>
          <label>
            Nome:
            <input type="text" name="name" placeholder="email@gmail.com" />
          </label>
        </form>
        <label>Scolarity: </label>
        <select>
          <option value="highschool">High School</option>
          <option value="highchoolt">High School (OnGoing)</option>
          <option value="uni">University (Finished)</option>
          <option value="uni">University (OnGoing)</option>
          <option value="uni">University (DroppedOut)</option>
        </select>

        <div>
          <button onClick={this.props.etapaDois}>Next Step</button>
        </div>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    tela: "login"
  };

  etapaDois = () => {
    this.setState({
      tela: "home"
    });
  };

  etapaUm = () => {
    this.setState({
      tela: "etapaUm"
    });
  };

  escolheForm = () => {
    switch (this.state.tela) {
      case "login":
        return <Etapa1 etapaDois={this.etapaDois} />;
        break;
      case "home":
        return <Home etapaUm={this.etapaUm} />;
        break;
    }
  };

  render() {
    return <div>{this.escolheForm()}</div>;
  }
}


