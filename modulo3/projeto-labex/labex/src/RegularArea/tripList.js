import React from 'react'
import styled from 'styled-components'
import navis from '../Assets/navis.jpg'
import {Button, ButtonList, TripHeader, CardBox, MegaBox} from './styledRegular'
import { useNavigate } from 'react-router-dom'
import { goBack, goJoin } from '../Routes/Coordinator'

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
flex-grow: 1;
color: white;
`

export default function TripsList() {
  const navigate = useNavigate()
  return (
    <Container>
      <TripHeader>
       <img src={navis}/>
       </TripHeader>
       <ButtonList>
       <Button onClick={() => goBack(navigate)}>Voltar</Button>
       <Button onClick={() => goJoin(navigate)}>Viaje Conosco</Button>
       </ButtonList>
      <MegaBox>
       <p><CardBox>Cards Ficarão Aqui</CardBox> </p>
        </MegaBox>
 
    </Container>
  )
}
