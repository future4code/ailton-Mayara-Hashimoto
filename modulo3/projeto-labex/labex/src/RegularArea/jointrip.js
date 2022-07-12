import React from 'react'
import styled from 'styled-components'
import navis from '../Assets/navis.jpg'
import { TripHeader, InputBox, Inputs, Selects, MegaBox, Button, ButtonBox  } from './styledRegular'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../Routes/Coordinator'

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
flex-grow: 1;
color: white;
`

export default function JoinTrip() {
  const navigate = useNavigate()
  return (
    <Container>
      <TripHeader>
       <img src={navis}/>
       </TripHeader>
       <MegaBox>
       <InputBox>
        <Selects>
          <option>Escolha Sua Viagem</option>
          <option>Arknigth</option>
          <option>This Option is a Test</option>
          <option>Thanos' House</option>
        </Selects>
        <Inputs placeholder='Nome'/>
        <Inputs placeholder='Idade'/>
        <Inputs placeholder='Por que quer fazer essa viagem?'/>
        <Inputs placeholder='Profissão'/>
        <Selects>
          <option>Escolha o País</option>
        </Selects>
        <ButtonBox>
        <Button onClick={() => goBack(navigate)}>Cancelar</Button> 
        <Button>Enviar</Button>
        </ButtonBox>
       </InputBox>
       </MegaBox>
  
    </Container>
  )
}
