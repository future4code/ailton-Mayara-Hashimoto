import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack, goLogin } from '../Routes/Coordinator'
import navis from '../Assets/navis.jpg'
import { Container, DetailButton, Button, DetailBox, ContainerDetail, DetailStyle, BoxCandidate, CandidateStyle } from './styledAdm'
import { TripHeader } from '../RegularArea/styledRegular'
import axios from 'axios'

export default function DetailsPage() {
  const [trip, setTrip] = useState({})
  const navigate = useNavigate()
  const params = useParams()
  useEffect(() => {
    const token = localStorage.getItem("token"); 
    if (!token) {
      goLogin(navigate);
    };
    const details = async () => {
      try {
        const res = await axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-hashimoto-ailton/trip/${params.id}`, {
          headers: {
            auth: token
          }
        })
        setTrip(res.data.trip)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    details()
  }, [])
 const approved = async (id, decision) => {
  const token = localStorage.getItem("token"); 
  const body = {approve : decision}
  try {
    const res = await axios
    .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-hashimoto-ailton/trips/${params.id}/candidates/${id}/decide`, body, {
      headers: {
        auth: token
      }
    })
  } catch (error) {
    console.log(error)
  }
 }
 const candidate = trip.candidates?.map((item) => {
    return <BoxCandidate key={item.id}>
      <p>{item.name}</p>
      <p>{item.age}</p>
      <p>{item.profession}</p>
      <p>{item.applicationText}</p>
      <DetailButton>
      <Button onClick={() => approved(item.id, true)}>Aprovado</Button>
      <Button onClick={() => approved(item.id, false)}>Ignorar</Button>
    </DetailButton>
    </BoxCandidate>
 })
 const approveds = trip.approved?.map((item) => {
  return <BoxCandidate key={item.id}>
    <p>{item.name}</p>
  </BoxCandidate>
 })

  return (
    <Container>
       <TripHeader>
        <img src={navis}/>
       </TripHeader>
       <ContainerDetail>
    <DetailBox>
    <h3>Descrição da Viagem</h3>
    <div>
        <DetailStyle> 
    <p>Planeta: {trip.planet}</p>
    <p>Duração: {trip.durationInDays}</p>
    <p>Data de Partida: {trip.date}</p>
    <p>Tema: {trip.name}</p>
    <p>Descrição: {trip.description}</p>
    </DetailStyle>
    </div>
  
       <Button onClick={() => goBack(navigate)}>Voltar</Button>
    </DetailBox>
    
    <DetailBox>
      <div>
        <h3>Interessados</h3> 
      </div>
     
     <CandidateStyle>
    {candidate}
    
     </CandidateStyle>
  
    </DetailBox>
    <DetailBox>
      <h3>Participantes</h3>
      <div>
  {approveds}
      </div>
    </DetailBox>
    </ContainerDetail>

    </Container>
  )
}
