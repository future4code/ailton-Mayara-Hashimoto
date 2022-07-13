import React, { useEffect, useState } from 'react'
import navis from '../Assets/navis.jpg'
import { useNavigate } from 'react-router-dom'
import { goBack, goCreate, goOut, goDetails, goLogin } from '../Routes/Coordinator'
import { Button, TripHeader, ButtonList } from '../RegularArea/styledRegular'
import { Container, Painel, BoxList, Hum } from './styledAdm'
import axios from 'axios'

export default function Admin() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect (() => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      goLogin(navigate);
    };
    const tripList = async () => {
      try {
        const res = await axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-hashimoto-ailton/trips", {
          headers: {
            auth: token
          }
        })
        console.log(res.data)
        setList(res.data.trips)
      } catch (error) {
        alert("Algo Deu Errado")
        console.log(error)
      }
    } 
    tripList()
  }, []);
  console.log(list)
   const Cards = list.map((item) => { 
    return <BoxList key={item.id} onClick={() => goDetails(navigate, item.id)}> 
    <p>{item.name}</p>
     </BoxList>
   })
   const logOut = () => {
    window.localStorage.setItem("token", "")
    goLogin(navigate)
   }
  return (
    <Container>
        <TripHeader>
       <img src={navis}/>
       </TripHeader>
       <ButtonList>
       <Button onClick={() => goOut(navigate)}>Voltar</Button>
       <Button onClick={() => goCreate(navigate)}>Criar Viagem</Button>
       <Button onClick={logOut}>LogOut</Button>
       </ButtonList>
       <Painel>
       <Hum>Painel de Controle</Hum>
       {Cards}
      
       </Painel>

    </Container>
  )
}
