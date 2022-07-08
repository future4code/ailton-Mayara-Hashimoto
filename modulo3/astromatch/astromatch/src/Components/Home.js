import React, {useState, useEffect} from 'react'
import { clearCache, profilePick, choosePerson } from './api';
import Exu from '../Assets/exu.png'
import Firey from '../Assets/fire.png'
import Hatu from '../Assets/hatu.png'
import Clear from '../Assets/clear.png'
import Logo from '../Assets/logo.png'
import BG from '../Assets/fundo.png'
import styled from 'styled-components';


const ExuButton = styled.img`
width: 35px;
height: 35px;
cursor: pointer;
padding: 5px;
`
const HatuButton = styled.img `
width: 40px;
height: 35px;
cursor: pointer;
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
background-color: rgba(200, 198, 183, 0.66);
border-radius: 10px;
margin: 5px 5px;
`
const Bold = styled.p`
font-weight: bold;
padding-left: 10px;
`
const MainBoxu = styled.div`
background-color: #bda8d6;
margin-top: 5px;
border-radius: 10px;
width: 400px;
height: 600px;
`
const MatchButton = styled.button `
background-color: pink;
font-weight: bold;
border: none;
padding: 5px 5px;
margin: 5px;
flex-direction: row;
align-items: center;
justify-content: center;
border-radius: 10px;
cursor: pointer;
:hover {
    background-color:rgba(168, 205, 214, 0.68);
}
`
const ClearButton = styled.button `
background-color: pink;
font-weight: bold;
border: none;
padding: 5px 5px;
margin: 5px;
flex-direction: row;
align-items: center;
justify-content: center;
border-radius: 10px;
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

export default function Home(props) {
  
 const [person, setPerson] = useState({});
    
    useEffect(() => {
        profilePick(setPerson)
    }, []) 

  return (
    <Container>
    <MainBoxu>
    <Logos src={Logo}/>
    <ButtonBox>
      <MatchButton onClick={() => props.setTela("match")}><Infires src={Firey}/></MatchButton>
      <ClearButton onClick={clearCache}> <Infires src={Clear}/></ClearButton>
      </ButtonBox>
      {person && <Boxu photo={person.photo} joker={person.name}>
      <InfoBoxu>
        <Bold>{person.name}, {person.age}</Bold>
        <p>{person.bio}</p>
      </InfoBoxu>
      <ButtonBoxu>
       <ExuButton src={Exu} onClick={() => choosePerson(person.id, false, setPerson)}/> 
        <HatuButton src={Hatu} onClick={() => choosePerson(person.id, true, setPerson)}/>
         </ButtonBoxu>
      </Boxu>}
    </MainBoxu>
    </Container>
  )
}
