import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import navis from '../Assets/navis.jpg'
import {Button, ButtonList, TripHeader, CardBox, MegaBox, Tittle} from './styledRegular'
import { useNavigate } from 'react-router-dom'
import { goOut, goJoin } from '../Routes/Coordinator'

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
flex-grow: 1;
color: white;
`

export default function TripsList() {
  const navigate = useNavigate()
  const [list, setList] = useState([]); 
  useEffect (() => {
    const token = localStorage.getItem("token");
  
    const tripList = async () => {
      try { const res = await axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-hashimoto-ailton/trips", {
          headers: { auth: token }
        })
        setList(res.data.trips)
      } catch (error) { alert("Algo Deu Errado") }
    } 
    tripList()
  }, []);
  console.log(list)
   const Cards = list.map((item) => { 
    return <CardBox key={item.id}> 
    <center><Tittle>{item.name}</Tittle></center>
    <p>Descrição: {item.description}</p>
    <p>Planeta: {item.planet}</p>
    <p>Duração:{item.durationInDays}</p>
    <p>Data de Partida: {item.date}</p>
     </CardBox>
   })
  
  return (
    <Container>
      <TripHeader> <img src={navis}/> </TripHeader>
       <ButtonList>
       <Button onClick={() => goOut(navigate)}>Voltar</Button>
       <Button onClick={() => goJoin(navigate)}>Viaje Conosco</Button>
       </ButtonList>
      <MegaBox>
       {Cards}
        </MegaBox>
 
    </Container>
  )
}
