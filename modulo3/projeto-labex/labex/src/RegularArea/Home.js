import React, {useState} from "react";
import Homes from '../Assets/home.gif'
import {Box, ButtonBox, Image, Button} from '../RegularArea/styledRegular';
import { useNavigate } from 'react-router-dom'
import { goTrips, goLogin } from "../Routes/Coordinator";

export default function Home () {
    const navigate = useNavigate(
    )
    return(
        <Box>
<Image src={Homes}/>
<ButtonBox>
 <Button onClick={() => goTrips(navigate)}>Ver Viagens</Button>
 <Button onClick={() => goLogin(navigate)}>LogIn</Button>
 </ButtonBox>
 <div>
    <p>
    Projeto criado por: Mayara Costa | <a target="_blank" href="https://github.com/aonosorah">GitHub</a>
    </p>
 </div>
 </Box> 
    )
}

