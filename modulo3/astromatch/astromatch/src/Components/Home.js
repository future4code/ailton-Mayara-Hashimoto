import React, {useState, useEffect} from 'react'
import { clearCache, profilePick, choosePerson } from './api';
import Exu from '../Assets/exu.png'
import Firey from '../Assets/fire.png'
import Hatu from '../Assets/hatu.png'
import Clear from '../Assets/clear.png'
import Logo from '../Assets/logo.png'
import BG from '../Assets/fundo.png'
import Load from '../Assets/load.gif'
import styled from 'styled-components';


const ExuButton = styled.img`
width: 35px;
height: 35px;
cursor: pointer;
padding: 5px;
transition: 0.2s;
:active {
  transform: rotate(20deg);
  transition: 0.2s;
}
`
const HatuButton = styled.img `
width: 40px;
height: 35px;
cursor: pointer;
transition: 0.2s;
:active {
  transform: rotate(20deg);
  transition: 0.2s;
}
`
const Boxu = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
background-image: url(${(props) => props.photo});
background-size: cover;
background-position: ${(props) => props.joke === "Joker"? "center top left" : "center top"};
border-radius: 10px;
width: 350px;
height: 450px;
margin: 25px;
`
const ButtonBoxu = styled.div` 
display: flex;
justify-content: space-around;
cursor: pointer;
`
const InfoBoxu = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: rgba(200, 198, 183, 0.66);
border-radius: 5px;
height: 90px;
margin: 5px 5px;
`
const Bold = styled.p`
font-weight: bold;
padding-left: 10px;
`
const MainBoxu = styled.div`
background-color: white;
margin-top: 5px;
width: 400px;
height: 610px;
`
const MatchButton = styled.button `
background-color: white;
font-weight: bold;
border: none;
padding: 5px 5px;
margin: 5px;
flex-direction: row;
align-items: center;
justify-content: center;
cursor: pointer;
:hover {
    background-color:rgba(168, 205, 214, 0.68);
}
`
const ClearButton = styled.button `
background-color: white;
font-weight: bold;
border: none;
padding: 5px 5px;
margin: 5px;
flex-direction: row;
align-items: center;
justify-content: center;
cursor: pointer;
:hover {
    background-color: rgba(168, 205, 214, 0.68);
}
`
const Infires = styled.img`
height: 33px;
width: 93px;
`
const ButtonBox = styled.div `
display: flex;
justify-content: space-evenly;
`
const Container = styled.div`
background-image: url(${BG});
background-position: center;
background-size: cover;
height: 100vh;
display: flex;
justify-content: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
const Logos = styled.img` 
border-radius: 10px;
`
const LoadImg = styled.img`
width: 100px;
height: 100px;
padding: 150px;
`

export default function Home(props) {
  
 const [person, setPerson] = useState({});
 const [loading, setLoad] = useState(true);

    
    useEffect(() => {
        profilePick(setPerson, setLoad)
    }, []) 

  return (
    <Container>
    <MainBoxu>
    <Logos src={Logo}/>
    <ButtonBox>
      <MatchButton onClick={() => props.setTela("match")}><Infires src={Firey}/></MatchButton>
      <ClearButton onClick={clearCache}> <Infires src={Clear}/></ClearButton>
      </ButtonBox>
      {loading && <LoadImg src={Load}/>}
      {loading === false && person && <Boxu photo={person.photo} joker={person.name}>
      <InfoBoxu>
        <Bold>{person.name} {person.age}</Bold>
        <p>{person.bio}</p>
      </InfoBoxu>
      <ButtonBoxu>
       <ExuButton src={Exu} onClick={() => choosePerson(person.id, false, setPerson, setLoad)}/> 
        <HatuButton src={Hatu} onClick={() => choosePerson(person.id, true, setPerson, setLoad)}/>
         </ButtonBoxu>
      </Boxu>}
    </MainBoxu>
    </Container>
  )
}
