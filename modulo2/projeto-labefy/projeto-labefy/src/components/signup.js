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
border: 2px;
border-color: #3d5a80;
/* width: 100%;
height: 50px; */
overflow: auto;
::-webkit-scrollbar { width: 5px;}
::-webkit-scrollbar-track { background: #293241; }
::-webkit-scrollbar-thumb { background: #98c1d9; }
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
        <h3>listen to your favorite songs</h3>
        <div>
         <iframe  
         src={this.state.url}
         width="50%" height="80" frameBorder="0" 
         allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
         </iframe>
         <div>
          {this.props.play.map((item) => {
            return <div> 
              <p>{item.name}</p> <Button onClick={() => this.more(item.id)}>Ver Mais</Button>
              {this.state.more && this.props.songs.map((item) => {
                return <Box onClick={() => this.tocar(item.url)}>{item.artist} {item.name}</Box>
              })}
              </div>
          })}
         </div>
         </div>


      </div>
    )
  }
}
