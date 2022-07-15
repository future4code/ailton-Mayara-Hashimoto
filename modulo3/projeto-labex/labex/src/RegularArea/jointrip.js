import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import navis from '../Assets/navis.jpg'
import { TripHeader, InputBox, Inputs, Selects, MegaBox, Button, ButtonBox  } from './styledRegular'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../Routes/Coordinator'
import {useForm} from '../Components/functionalities'
import { TripList, ApplyToTrip } from '../Components/api'

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
flex-grow: 1;
color: white;
`

export default function JoinTrip() {
  const navigate = useNavigate()
  const [list, setList] = useState()
  useEffect (() => {
    const getTrips = async () => {
      const res = await TripList()
      setList(res)
    }
getTrips()
  }, []);
  const { form, onChange, cleanFields} = useForm ({
    trip: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
  });
  const joined = (event) => {
    ApplyToTrip(form)
    event.preventDefault(form)
    cleanFields();
    
  };
  const theTrips = list?.map((item) => {
    return <option key={item.id} value={item.id}>{item.name}</option>
  })
  return (
    <Container>
      <TripHeader> <img src={navis}/> </TripHeader>
       <MegaBox>
       <InputBox onSubmit={joined}>
       
        <Selects name={"trip"} onChange={onChange} value={form.trip} required>
          {theTrips}
        </Selects>
        <Inputs placeholder='Nome' name={"name"} type={"text"} value={form.name} onChange={onChange} required pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}/>
        <Inputs placeholder='Idade' name={"age"} value={form.age} onChange={onChange} required type={"Number"} min={18} title={"Apenas pessoas acima de 18 anos podem realizar as viagens!"}/>
        <Inputs placeholder='Por que quer fazer essa viagem?' name={"applicationText"} value={form.applicationText} onChange={onChange} pattern={"^.{30,}"}
          title={"O nome deve ter no mínimo 30 letras"}/>
        <Inputs placeholder='Profissão' name={"profession"} value={form.profession} onChange={onChange} required/>
        <Selects onChange={onChange} name="country" value={form.country} required>
          <option>País de Origem</option>
          <option>Alemanhã</option>
          <option>Africa</option>
          <option>Brasil</option>
          <option>Coreia do Sul</option>
          <option>México</option>
          <option>Reino Unido</option>
          <option>USA</option>
          
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
