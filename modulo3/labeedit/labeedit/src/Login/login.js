import React from 'react'
import { Container, BoxLogo, Color1, Color2, Color3, Color4, H1, StyledP,
         Inputs, Forms, ButtonEnter, ButtonCreate, DivForm, DivCreate, DivLine } from './styled'

export default function Login() {
  return (
    <Container>
    <BoxLogo>
      <Color1/> <Color3/>
      <Color2/> <Color4/>
    </BoxLogo>
      <H1>LabEddit</H1>
      <StyledP>O projeto de rede social da Labenu</StyledP>
     <DivForm>
       <Forms>
        <Inputs placeholder='Name' required/>
        <Inputs placeholder='Password' required/>
        <ButtonEnter>Continuar</ButtonEnter>
       </Forms>
     </DivForm>
     <DivCreate>
     <DivLine></DivLine>
      <ButtonCreate>Crie uma conta!</ButtonCreate>
     </DivCreate>
    </Container>
  )
}
