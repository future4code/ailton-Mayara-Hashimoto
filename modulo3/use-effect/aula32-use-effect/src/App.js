import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard/PokeCard";
import axios from "axios";
import styled from "styled-components";
import pokemons from './PokeCard/pokemons.jpg'

const Title = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 h1 {
  color: #363b81;
 };
 h4 {
  color: #5db9ff;
 }
`
const Select = styled.select`
display: flex;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
align-items: center;
justify-content: center ;
width: 350px;
margin-left: 10px;
margin-bottom: 5px;
height: 30px;
border-radius: 5px;
text-align: center;
`
const MainContainer = styled.div`
background-image: url(${pokemons});
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export default function App (){

  const [list, setList] = useState([])
  const [pokeName, setPokeName] =useState("")

  useEffect(() => {
    const selectPokemon = async () => {
      try {
        const res = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
        setList(res.data.results)
      } catch (error) {
        console.log(error)
      }
    };
    selectPokemon()
  }, [pokeName]);

  const onChangePokeName = (event) => {
    setPokeName(event.target.value)
  }
  return (
    <MainContainer>
        <Title>
      <h1>POKEMON</h1>
      <h4>Gotta Catch 'Em ALL!</h4>
        </Title>
        <Select onChange={onChangePokeName}>
          <option value={""}>None</option>
         {list.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
          )
         })}
        </Select>
    
  
      <div>
       
        <PokeCard pokeName={pokeName}/>
      </div>
    </MainContainer>
  )
}