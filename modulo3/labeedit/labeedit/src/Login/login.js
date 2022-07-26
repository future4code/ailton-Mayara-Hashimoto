import React, { useEffect } from 'react'
import { Container, BoxLogo, Color1, Color2, Color3, Color4, H1, StyledP,
         Inputs, Forms, ButtonEnter, ButtonCreate, DivForm, DivCreate, DivLine } from './styled'
import { LogMeIn } from '../Components/api'
import { useForm } from '../Components/hooks'
import { useNavigate } from 'react-router-dom'
import { goFeed, goSignup } from '../Routes/Coordinator'

export default function Login() {
    const navigate = useNavigate()
    const { form, onChange, clearForm } = useForm({email: "", password: ""})
    const onLogin = (event) =>{
      event.preventDefault()
      const res = LogMeIn(form)
      localStorage.setItem("token", res.token)
      clearForm()
      goFeed(navigate)
    };

    
  return (
    <Container>
    <BoxLogo>
      <Color1/> <Color3/>
      <Color2/> <Color4/>
    </BoxLogo>
      <H1>LabEddit</H1>
      <StyledP>O projeto de rede social da Labenu</StyledP>
     <DivForm>
       <Forms onSubmit={onLogin}>
        <Inputs onChange={onChange} type={"email"} value={form.email} name={"email"} placeholder='E-mail' required/>
        <Inputs onChange={onChange} type={"password"} value={form.password} name={"password"} placeholder='Password' required/>
        <ButtonEnter>Continuar</ButtonEnter>
       </Forms>
     </DivForm>
     <DivCreate>
     <DivLine></DivLine>
      <ButtonCreate onClick={()=> goSignup(navigate)} >Crie uma conta!</ButtonCreate>
     </DivCreate>
    </Container>
  )
}
