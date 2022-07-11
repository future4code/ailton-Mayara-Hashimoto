import React from 'react'
import styled from 'styled-components'
import navis from '../Assets/navis.jpg'
import {Button, ButtonList, TripHeader, CardBox, MegaBox} from './styledRegular'

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
flex-grow: 1;
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
        <CardBox>
          <p>Trip Theme: Arknights</p>
          <p>Description: Taking you to the most amazing, and famous, battlefields in the universe.</p>
          <p>Planet: Undefined</p>
          <p>Duration: 50 light years</p>
          <p>Date: 2023 - 12 - 25</p>
        </CardBox>
        <CardBox>
          <p>Trip Theme: Arknights</p>
          <p>Description: Taking you to the most amazing, and famous, battlefields in the universe.</p>
          <p>Planet: Undefined</p>
          <p>Duration: 50 light years</p>
          <p>Date: 2023 - 12 - 25</p>
        </CardBox>
        <CardBox>
          <p>Trip Theme: Arknights</p>
          <p>Description: Taking you to the most amazing, and famous, battlefields in the universe.</p>
          <p>Planet: Undefined</p>
          <p>Duration: 50 light years</p>
          <p>Date: 2023 - 12 - 25</p>
        </CardBox>
        <CardBox>
          <p>Trip Theme: Arknights</p>
          <p>Description: Taking you to the most amazing, and famous, battlefields in the universe.</p>
          <p>Planet: Undefined</p>
          <p>Duration: 50 light years</p>
          <p>Date: 2023 - 12 - 25</p>
        </CardBox>
        <CardBox>
          <p>Trip Theme: Arknights</p>
          <p>Description: Taking you to the most amazing, and famous, battlefields in the universe.</p>
          <p>Planet: Undefined</p>
          <p>Duration: 50 light years</p>
          <p>Date: 2023 - 12 - 25</p>
        </CardBox>
        <CardBox>
          <p>Trip Theme: Arknights</p>
          <p>Description: Taking you to the most amazing, and famous, battlefields in the universe.</p>
          <p>Planet: Undefined</p>
          <p>Duration: 50 light years</p>
          <p>Date: 2023 - 12 - 25</p>
        </CardBox>
        <CardBox>
          <p>Trip Theme: Arknights</p>
          <p>Description: Taking you to the most amazing, and famous, battlefields in the universe.</p>
          <p>Planet: Undefined</p>
          <p>Duration: 50 light years</p>
          <p>Date: 2023 - 12 - 25</p>
        </CardBox>
        <CardBox>
          <p>Trip Theme: Arknights</p>
          <p>Description: Taking you to the most amazing, and famous, battlefields in the universe.</p>
          <p>Planet: Undefined</p>
          <p>Duration: 50 light years</p>
          <p>Date: 2023 - 12 - 25</p>
        </CardBox>
        <CardBox>
          <p>Trip Theme: Arknights</p>
          <p>Description: Taking you to the most amazing, and famous, battlefields in the universe.</p>
          <p>Planet: Undefined</p>
          <p>Duration: 50 light years</p>
          <p>Date: 2023 - 12 - 25</p>
        </CardBox>
        <CardBox>
          <p>Trip Theme: Arknights</p>
          <p>Description: Taking you to the most amazing, and famous, battlefields in the universe.</p>
          <p>Planet: Undefined</p>
          <p>Duration: 50 light years</p>
          <p>Date: 2023 - 12 - 25</p>
        </CardBox>
        <CardBox>
          <p>Trip Theme: Arknights</p>
          <p>Description: Taking you to the most amazing, and famous, battlefields in the universe.</p>
          <p>Planet: Undefined</p>
          <p>Duration: 50 light years</p>
          <p>Date: 2023 - 12 - 25</p>
        </CardBox>
        <CardBox>
          <p>Trip Theme: Arknights</p>
          <p>Description: Taking you to the most amazing, and famous, battlefields in the universe.</p>
          <p>Planet: Undefined</p>
          <p>Duration: 50 light years</p>
          <p>Date: 2023 - 12 - 25</p>
        </CardBox>
        </MegaBox>
    </Container>
  )
}
