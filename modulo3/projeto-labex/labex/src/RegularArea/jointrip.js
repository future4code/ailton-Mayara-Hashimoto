import React from 'react'
import styled from 'styled-components'
import navis from '../Assets/navis.jpg'
import { TripHeader, InputBox, Inputs, Selects, MegaBox, Button, ButtonBox  } from './styledRegular'

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
flex-grow: 1;
color: white;
`

export default function JoinTrip() {
  return (
    <Container>
      <TripHeader>
       <img src={navis}/>
       </TripHeader>
       <MegaBox>
       <InputBox>
        <Selects>
          <option>Pick Your Themed Trip</option>
          <option>Arknigth</option>
          <option>This Option is a Test</option>
          <option>Thanos' House</option>
        </Selects>
        <Inputs placeholder='Name'/>
        <Inputs placeholder='Age'/>
        <Inputs placeholder='Tell us why you wanna be part of this trip'/>
        <Inputs placeholder='profession'/>
        <Selects>
          <option>Pick Your Country</option>
        </Selects>
        <ButtonBox>
        <Button>Cancel</Button> 
        <Button>Send</Button>
        </ButtonBox>
       </InputBox>
       </MegaBox>
    
    </Container>
  )
}
