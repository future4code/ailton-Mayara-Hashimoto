import React from 'react'
import { useNavigate } from 'react-router-dom'
import Error from '../Assets/hyunjin.gif'
import {Image, Box, Phrase, Button, ButtonBox} from '../RegularArea/styledRegular'
import { goOut } from "../Routes/Coordinator"

export default function ErrorPage () {
    const navigate = useNavigate()

    return (
        <Box>
            <Image src={Error} onClick={() => goOut(navigate)}/>
            <Phrase>
                <p>Um erro inesperado ocorreu.</p>
                <p>Por favor retorne à pagina inicial.</p> 
            </Phrase>
            <ButtonBox>
                <Button onClick={() => goOut(navigate)}>Voltar</Button>
           </ButtonBox>
        </Box>
    )
}