import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../Routes/Coordinator'
import navis from '../Assets/navis.jpg'
import {   Selects, TripHeader, Inputs } from '../RegularArea/styledRegular'
import { Button, ButtonBox, Container, Painel, InputBox, Hum } from './styledAdm'

export default function CreateTrip() {
  const navigate = useNavigate()
  return (
    <Container>
      <TripHeader>
       <img src={navis}/>
       </TripHeader>

       <Painel>
       <Hum>Criar Novas Viagens Espaciais</Hum>
       <InputBox> 
        <Inputs placeholder='Nome da Viagem:'/>
        <Selects>
          <option>Escolha o planeta:</option>
        </Selects>
        <Inputs type={Number} placeholder='Data:'/> 
        <Inputs placeholder='Descrição:'/> 
        <Inputs placeholder='Duração:'/> 
        <ButtonBox>
        <Button onClick={() => goBack(navigate)}>Cancelar</Button> 
        <Button>Enviar</Button>
        </ButtonBox>
       </InputBox>

       </Painel>
    </Container>
  )
}
