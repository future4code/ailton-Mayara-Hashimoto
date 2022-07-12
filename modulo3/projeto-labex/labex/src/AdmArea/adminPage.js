import React from 'react'
import navis from '../Assets/navis.jpg'
import { useNavigate } from 'react-router-dom'
import { goBack, goCreate, goOut, goDetails } from '../Routes/Coordinator'
import { Button, TripHeader, ButtonList } from '../RegularArea/styledRegular'
import { Container, Painel, BoxList, Hum } from './styledAdm'

export default function Admin() {
  const navigate = useNavigate()
  return (
    <Container>
        <TripHeader>
       <img src={navis}/>
       </TripHeader>
       <ButtonList>
       <Button onClick={() => goBack(navigate)}>Voltar</Button>
       <Button onClick={() => goCreate(navigate)}>Criar Viagem</Button>
       <Button onClick={() => goOut(navigate)}>LogOut</Button>
       </ButtonList>
       <Painel>
       <Hum>Painel de Controle</Hum>
       <BoxList onClick={() => goDetails(navigate)}> Box Lista de viagens </BoxList>
      
       </Painel>

    </Container>
  )
}
