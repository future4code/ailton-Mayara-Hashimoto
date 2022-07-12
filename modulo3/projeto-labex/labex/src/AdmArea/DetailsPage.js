import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../Routes/Coordinator'
import navis from '../Assets/navis.jpg'
import { Container, Button, DetailBox, ContainerDetail } from './styledAdm'
import { TripHeader } from '../RegularArea/styledRegular'

export default function DetailsPage() {
  const navigate = useNavigate()
  return (
    <Container>
       <TripHeader>
        <img src={navis}/>
       </TripHeader>
       <ContainerDetail>
    <DetailBox>
    <h3>Descrição da Viagem</h3>
       <Button onClick={() => goBack(navigate)}>Voltar</Button>
    </DetailBox>
    
    <DetailBox>
      <h3>Interessados</h3>
     <div>
 
     </div>
  
    </DetailBox>
    <DetailBox>
      <h3>Pendentes</h3>
      <div>
  
      </div>
    </DetailBox>
    </ContainerDetail>

    </Container>
  )
}
