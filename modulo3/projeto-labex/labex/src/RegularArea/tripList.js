import React from 'react'
import styled from 'styled-components'
import navis from '../Assets/navis.jpg'
import {Button, ButtonList, TripHeader, CardBox, MegaBox} from './styledRegular'

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
flex-grow: 1;
color: white;
`

export default function TripsList() {
  return (
    <Container>
      <TripHeader>
       <img src={navis}/>
       </TripHeader>
       <ButtonList>
       <Button>Back</Button>
       <Button>Join A Trip</Button>
       </ButtonList>
      <MegaBox>
       <p><CardBox>Cards Ficarão Aqui</CardBox> </p>
        </MegaBox>
    </Container>
  )
}
