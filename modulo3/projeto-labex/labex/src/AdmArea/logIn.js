import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goAdmn } from '../Routes/Coordinator'
import Homes from '../Assets/home.gif'
import { ButtonBox, Image, Button } from '../RegularArea/styledRegular';
import { LoginBox, Box, InputLog } from './styledAdm'
export default function LogIn() {
    const navigate = useNavigate()
  return (
  
    <Box>
<Image src={Homes}/>
<LoginBox>
    <InputLog placeholder='email'/>
    <InputLog placeholder='password'/>
  </LoginBox>
<ButtonBox>
    <Button onClick={() => goBack(navigate)}>Cancelar</Button>
    <Button onClick={() => goAdmn(navigate)}>Enviar</Button>
 </ButtonBox>
 </Box> 
    
  
  )
}
