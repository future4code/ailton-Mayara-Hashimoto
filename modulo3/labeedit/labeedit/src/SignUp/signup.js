import React from 'react'
import { Container, BoxLogo, Color1, Color2, Color3, Color4, Header, 
         StyledP, H1, DivHeader, DivForm, Forms, Inputs, Note, Strong,
         DivCheck, ButtonEnter, DivNote } from './styled'
import { SignMeUp } from '../Components/api';
import { useForm } from '../Components/hooks';
import { useNavigate } from 'react-router-dom'
import { goFeed, goLogin } from '../Routes/Coordinator'

export default function Signup () {
  const navigate = useNavigate()
  const { form, onChange, clearForm } = useForm({username: "", email: "", password: ""})
  const onSignup = (event) =>{
    event.preventDefault()
    const res = SignMeUp(form)
    localStorage.setItem("token", res.token)
    clearForm()
    goFeed(navigate)
  };


  return (
    <>
    <Header>
    <BoxLogo>
  <Color1/> <Color3/>
  <Color2/> <Color4/>
  </BoxLogo>
  <StyledP onClick={() => goLogin(navigate)}>Entrar</StyledP>
  </Header>
    <Container>
      <DivHeader>
        <H1>Olá, boas vindas ao LabEddit </H1>
      </DivHeader>
      <DivForm>
        <Forms onSubmit={onSignup}>
        <Inputs onChange={onChange} value={form.username} name={"username"} placeholder='Nome' required/>
        <Inputs onChange={onChange} type={"email"} value={form.email} name={"email"}  placeholder='E-mail' required/>
        <Inputs onChange={onChange} type={"password"} value={form.password} name={"password"}  placeholder='Senha' required/>
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
