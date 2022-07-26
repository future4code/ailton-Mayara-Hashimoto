import React from 'react'
import { Header, BoxLogo, Color1, Color2, Color3, Color4, StyledP, ButtonEnter,
         DivPost, Input, DivLine } from './styled'
import { useNavigate } from 'react-router-dom'
import { goLogin } from '../Routes/Coordinator'
import Card from './cardFeed'

export default function Feed() {
  const navigate = useNavigate()
  return (
    <div>
      
  <Header>
    <BoxLogo>
  <Color1/> <Color3/>
  <Color2/> <Color4/>
  </BoxLogo>
  <StyledP onClick={() => goLogin(navigate)}>Logout</StyledP>
  </Header>
  <DivPost>
    <Input placeholder='Escreva seu post...'/>
    <ButtonEnter>Postar</ButtonEnter>
  </DivPost>
  <DivLine></DivLine>
    <Card/>
    </div>
  )
}
