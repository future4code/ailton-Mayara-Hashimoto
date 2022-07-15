import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goOut, goAdmn } from '../Routes/Coordinator'
import Homes from '../Assets/home.gif'
import { ButtonBox, Image, Button } from '../RegularArea/styledRegular';
import { LoginBox, Box, InputLog } from './styledAdm'
import axios from 'axios';
import { useState, useEffect } from 'react';





export default function LogIn() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChangeEmail = (event) => {
      setEmail(event.target.value)
    };
    const onChangePass = (event) => {
      setPassword(event.target.value)
    }
useEffect(() => {
  const token = localStorage.getItem("token")
  if (token) { goAdmn(navigate) }
},[])
    const onLogin = async (event) => {
      event.preventDefault()
     try {
      const body = {
        email: email,
        password: password
      };
     const response = await axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-hashimoto-ailton/login", body)
        localStorage.setItem("token", response.data.token)
      goAdmn(navigate)
    }
      catch (error) { alert("Usuário Inválido.", error.response) }
    }; 
  return (
  
    <Box>
<Image src={Homes}/>
<LoginBox onSubmit={onLogin}>
    <InputLog placeholder="email"
              type="email" onChange={onChangeEmail}
              value={email}/>
    <InputLog placeholder='password' 
              type="password" onChange={onChangePass}
              value={password}
    />
<ButtonBox>
    <Button onClick={() => goOut(navigate)}>Cancelar</Button>
    <Button>Enviar</Button>
 </ButtonBox> 
 </LoginBox>
 </Box> 
    
  
  )
}
