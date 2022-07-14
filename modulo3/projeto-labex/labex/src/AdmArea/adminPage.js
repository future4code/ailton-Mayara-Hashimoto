import React, { useEffect, useState } from 'react'
import navis from '../Assets/navis.jpg'
import { useNavigate } from 'react-router-dom'
import { goCreate, goOut, goDetails, goLogin } from '../Routes/Coordinator'
import { Button, TripHeader, ButtonList } from '../RegularArea/styledRegular'
import { Container, Painel, BoxList, Hum, ButtonDel, BoxRow } from './styledAdm'
import axios from 'axios' 
import { DeleteTrips } from '../Components/api'

export default function Admin() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect (() => {
    const token = localStorage.getItem("token");
    if (!token) { goLogin(navigate); };
    const tripList = async () => {
      try { const res = await axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-hashimoto-ailton/trips", {
          headers: { auth: token }
        })
        setList(res.data.trips)
      } catch (error) {
        alert("Algo Deu Errado")
      }
    } 
    tripList()
  }, []);
   const Cards = list.map((item) => { 
    return <BoxRow key={item.id}> <ButtonDel onClick={() => DeleteTrips(item.id)}>X</ButtonDel> 
    <BoxList  onClick={() => goDetails(navigate, item.id)}> 
    <p>{item.name}</p> 
     </BoxList> </BoxRow>
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
       <Hum><h1>Painel de Controle</h1></Hum>
       <Painel>
       {Cards}
       </Painel>
    </Container>
  )
}
