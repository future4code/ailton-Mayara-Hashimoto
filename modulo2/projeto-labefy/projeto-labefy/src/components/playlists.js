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
const ListBox = styled.div `
color: #6d6875;
cursor: pointer;
font-weight: bold;

`
const DelButton = styled.button` 
background-color: #ee6c4d;
border: none;
padding: 5px;
margin: 5px;
height: 30px;
width: 150px;
border-radius: 5px;
`


export const Lists = (props) => {

  return (
    <div>         
        <div> {props.more && 
      <div>
      <h3>add to your playlist:</h3>
      <div>
          <Input 
          placeholder='name:'
          value={props.inputPlaylist}
          onChange={props.onPlaylist}
          />
      </div>
      <div>
          <Input placeholder='artist:'
          value={props.inputArtist}
          onChange={props.onArtist}
          />
      </div>
      <div>
          <Input placeholder='song link:'
          value={props.inputSongs}
          onChange={props.onSongs}
          />
      </div>
      <div>
          <Button onClick={() => props.postSong(props.id)} >send it in!</Button>

          
      </div>

    </div>
      } </div></div>
  )
}


export default class Playlists extends Component {

  state = {
    more: false
  };

  showList = () => {
    this.setState({more: !this.state.more})
  }

  render() {
    // console.log(this.props.play)
    return (
      <div>
          <ListBox>
        {this.props.play.map((item) => {
          return <div key={item.id}>
           <p onClick={this.showList}>{item.name} </p><DelButton onClick={() => this.props.delPlaylists(item.id) }>delete</DelButton>
            <Lists 
            inputPlaylist={this.props.inputPlaylist}
            onPlaylist={this.props.onPlaylist}
            inputArtist={this.props.inputArtist}
            onArtist={this.props.onArtist}
            inputSongs={this.props.inputSongs}
            onSongs={this.props.onSongs}
            more={this.state.more}
            postSong={this.props.postSong}
            id={item.id}
            />

         
          </div>
        })}
        </ListBox>     
      </div>
    )
  }
}
