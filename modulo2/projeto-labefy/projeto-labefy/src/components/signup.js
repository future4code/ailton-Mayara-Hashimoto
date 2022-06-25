import React, { Component } from 'react'
import styled from 'styled-components'


const Button = styled.button` 
background-color: pink;
border: none;
padding: 5px;
margin: 5px;
height: 30px;
width: 150px;
border-radius: 5px;
`
const Box = styled.p`
cursor: pointer;
color: #1d3557;
`
const Box1 = styled.p`
cursor: pointer;
color: #006d77;
font-weight: bold;
`


export default class SignUp extends Component {
  state ={
    more: false,
    url: ""
  }

  more = (id) => {
    this.setState({more: !this.state.more})
    this.props.tracks(id)
  }

  tocar = (url) => {
    this.setState({url: url})
  }
 
  render() {
    console.log(this.props.songs, "lol")



    return (
      <div>
        <h5>select a song and the player will appear</h5>
        <div>
         <center><iframe  
         src={this.state.url}
         width="50%" height="80" frameBorder="0" 
         allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
         </iframe></center>
         <div>
          {this.props.play.map((item) => {
            return <div> 
              <Box1>{item.name}</Box1> <Button onClick={() => this.more(item.id)}>Ver Mais</Button>
              {this.state.more && this.props.songs.map((item) => {
                return <Box onClick={() => this.tocar(item.url)}>{item.artist}: {item.name}</Box>
              })}
              </div>
          })}
         </div>
         </div>


      </div>
    )
  }
}
