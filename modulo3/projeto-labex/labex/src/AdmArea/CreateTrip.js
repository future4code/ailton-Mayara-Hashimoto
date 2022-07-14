import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../Routes/Coordinator'
import navis from '../Assets/navis.jpg'
import {   Selects, TripHeader, Inputs } from '../RegularArea/styledRegular'
import { Button, ButtonBox, Container, Painel, InputBox, Hum } from './styledAdm'
import { useForm } from '../Components/functionalities'
import { CreateTrips } from '../Components/api'

export default function CreateTrip() {
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });
  const create = (event) => {
    CreateTrips(form)
    event.preventDefault()
    console.log(form)
    cleanFields()
  };

  return (
    <Container>
      <TripHeader>
       <img src={navis}/>
       </TripHeader>

       <Painel>
       <Hum>Criar Novas Viagens Espaciais</Hum>
       <InputBox onSubmit={create}> 
        <Inputs placeholder='Nome da Viagem:' name={"name"} type={"text"} value={form.name} onChange={onChange} required/>
        <Selects name="planet" value={form.planet} onChange={onChange} required>
        <option>Lua</option>
        <option>Marte</option>
        <option>Netuno</option>
        <option>Urano</option>
        <option>Mercurio</option>
        <option>Venus</option>
        <option>Jupiter</option>
        <option>Terra</option>
        <option>Saturno</option>
        </Selects>
        <Inputs placeholder='Data:' name={"date"} type={"date"} value={form.date} onChange={onChange} required/> 
        <Inputs placeholder='Descrição:' name={"description"} type={"text"} value={form.description} onChange={onChange} required/> 
        <Inputs placeholder='Duração:' name={"durationInDays"} type={"text"} value={form.durationInDays} onChange={onChange} required/> 
        <ButtonBox>
        <Button onClick={() => goBack(navigate)}>Cancelar</Button> 
        <Button>Enviar</Button>
        </ButtonBox>
       </InputBox>

       </Painel>
    </Container>
  )
}
