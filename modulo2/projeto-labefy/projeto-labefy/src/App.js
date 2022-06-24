import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import './App.css'
import SignUp from './components/signup'
import Playlists from './components/playlists'
import Home from './components/home'
import Songs from './components/songList'
import { eventWrapper } from '@testing-library/user-event/dist/utils'

const Button = styled.button` 
background-color: pink;
border: none;
padding: 5px;
margin: 5px;
height: 30px;
width: 150px;
border-radius: 5px;
`
const Input = styled.input `
width: 200px;
height: 35px;
border-radius: 5px;
`
const MainContainter = styled.div `
background-color: #e0fbfc;
height: 100vh;


`

export default class App extends Component {
  state = {
    telaAtual: "Home",
    playlists: [],
    artists: [],
    songs: [],
    inputPlaylist: "",
    inputArtist:"",
    inputSongs:"",
  };

  onPlaylist = (event) => {
    this.setState({inputPlaylist: event.target.value})
  }
  onArtist = (event) => {
    this.setState({inputArtist: event.target.value})
  }
  onSongs = (event) => {
    this.setState({inputSongs: event.target.value})
  }
  onName = (event) => {
    this.setState({inputName: event.target.value})
  }


  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "Home":
        return <Home />;
      case "Playlists":
        return <Playlists 
        play={this.state.playlists} 
        postSong={this.postSong}
        inputPlaylist={this.state.inputPlaylist}
        onPlaylist={this.onPlaylist}
        inputArtist={this.state.inputArtist}
        onArtist={this.onArtist}
        inputSongs={this.state.inputSongs}
        onSongs={this.onSongs}
        delPlaylists={this.delPlaylists}
        />;
      case "SignUp":
        return <SignUp 
        songs={this.state.songs}
        play={this.state.playlists} 
        tracks={this.allTracks}
        />;
      case "SongsList":
        return <Songs />;
      default:
        return <Home />;
    }
  };

  changeScreen = (nomeTela) => {
    this.setState({ telaAtual: nomeTela });
  };

  componentDidMount() {
    console.log(this.state.songs)
    this.allPlaylists();
    // this.allTracks();
    // this.search();
  }
  // componentDidUpdate(prevProps, prevState) {

  //   // if (this.state.playlists !== prevState.playlists) {
  //   //   this.allPlaylists()
  //   //   console.log("Update")
  //   // }
  //   // if (this.state.songs !== prevState.songs) {
  //   //   this.allPlaylists()
  //   //   console.log("Updated!")
  //   // }
  // }

  postPlaylist =() => {
    const body = {
      name: this.state.inputPlaylist
    };
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
    {
      headers: {
        Authorization: "mayara-hashimoto-ailton"
      }
    })
    .then((respnse) =>{
      window.alert("playlist added with success!")
    }).catch((error) =>{
      window.alert("this playlist name might have been already added. please, pick another one")
    });
  };
  postSong =(id) => {
    console.log(this.state)
    const body = {
      name: this.state.inputPlaylist,
      artist: this.state.inputArtist,
      url: this.state.inputSongs
    };
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body,
    {
      headers: {
        Authorization: "mayara-hashimoto-ailton"
      }
    })
    .then((re) =>{
      console.log(re)
      window.alert("song added with success!")
    }).catch((er) =>{
      window.alert(er.message)
    });
  };
  allPlaylists = async () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: "mayara-hashimoto-ailton"
        }
      })
        console.log(res)
      this.setState({playlists: res.data.result.list})
    } catch(error) {
      alert("I guess we couldn't find what you looking for. Try again!")
    }
  };
  allTracks = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: "mayara-hashimoto-ailton"
        }
      })
      this.setState({songs: res.data.result.tracks})
    }catch(error) {
      alert("Ops. Please try again.")
    }
  };
  delPlaylists = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
        headers: {
          Authorization: "mayara-hashimoto-ailton"
        }
      })
      // const newPlaylist = this.state.playlists?.filter.apply((item) => {
      //   return item.id !== id
      // })
      // this.setState({playlists: newPlaylist})
      this.allPlaylists()
    }
  };
  delTracks = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/${id}`, {
        headers: {
          Authorization: "mayara-hashimoto-ailton"
        }
      }
     )
     const newTracks = this.state.songs.map((item) => {
      return item.id !== id
     })
     this.setState({songs: newTracks})
    }
  }


  render() {
    return (
      <div>
        <MainContainter>
         <h1>RockMyTunes</h1>
   
        
        <div>
        <Button onClick={() => this.changeScreen("Home")}>Home</Button>
        <Button onClick={() => this.changeScreen("Playlists")}>Playlists</Button>
        <Button onClick={() => this.changeScreen("SignUp")}>Time to Listen</Button>
       
        </div>
       <div>
        <p>create your playlist:</p>
        <div>
        <Input placeholder='playlist name:'
               value={this.inputPlaylist}
               onChange={this.onPlaylist}
               /> <Button onClick={this.postPlaylist}>Go</Button>
        </div>
       </div>
        
        {this.escolherTela()}
        </MainContainter>
      </div>
    );
  }
}