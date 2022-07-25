import React from 'react'
import { Container, BoxLogo, Color1, Color2, Color3, Color4, Header, 
         StyledP, H1, DivHeader, DivForm, Forms, Inputs, Note, Strong,
         DivCheck, ButtonEnter, DivNote } from './styled'

export default function Signup () {
  return (
    <>
    <Header>
    <BoxLogo>
  <Color1/> <Color3/>
  <Color2/> <Color4/>
  </BoxLogo>
  <StyledP>Entrar</StyledP>
  </Header>
    <Container>
      <DivHeader>
        <H1>Olá, boas vindas ao LabEddit </H1>
      </DivHeader>
      <DivForm>
        <Forms>
        <Inputs placeholder='Nome' required/>
        <Inputs placeholder='E-mail' required/>
        <Inputs placeholder='Senha' required/>
        <DivNote>
          <Note>Ao continuar, você concorda com nosso <Strong>Contrato de usuário</Strong> e nossa <Strong>Política de Privacidade</Strong></Note>
        </DivNote>
        <DivCheck>
          <input type={"checkbox"}/> <Note>Eu condorco em receber e-mails sobre coisas legais no LabEddit</Note>
        </DivCheck>
        <ButtonEnter>Cadastrar</ButtonEnter>
        </Forms>
      </DivForm>
    </Container>
    </>
  )
}
