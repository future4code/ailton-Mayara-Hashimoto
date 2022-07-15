import React, {useState} from "react";
import Homes from '../Assets/home.gif'
import {Box, ButtonBox, Image, Button, Phrase, LinkStyle, StyleP} from '../RegularArea/styledRegular';
import { useNavigate } from 'react-router-dom'
import { goTrips, goLogin } from "../Routes/Coordinator";

export default function Home () {
    const navigate = useNavigate(
    )
    return(
        <Box>
<Image src={Homes}/>
<Phrase>
    <p>Pra onde você quer ir?</p>
    <p>Nós te levamos</p>
    </Phrase>
<ButtonBox>
 <Button onClick={() => goTrips(navigate)}>Ver Viagens</Button>
 <Button onClick={() => goLogin(navigate)}>LogIn</Button>
 </ButtonBox>
 <div>
    <StyleP>
    Projeto criado por Mayara Costa : <LinkStyle target="_blank" href="https://github.com/aonosorah">GitHub</LinkStyle>
    </StyleP>
 </div>
 </Box> 
    )
}

