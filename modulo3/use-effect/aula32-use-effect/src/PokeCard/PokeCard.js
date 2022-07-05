import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CardPokemon = styled.div`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
display: flex;
flex-direction: column;
width: 150px;
height: 210px;
border-radius: 5px;
margin-left: 10px;
border-bottom: 2px back;
background-color: #fbd743;
align-items: center;
border-bottom: 2px black;
padding: 100px;
box-shadow: 2px 2px gray;

`

export default function PokeCard (props){

    const [pokemon, setPokemon] = useState({});
    
   
useEffect (() => {
    const pegaPokemon = async () => {
       try {
        const res = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
            setPokemon(res.data)
       } catch (error) {
        console.log(error)
       }
    }
    pegaPokemon()
}, [pokemon])

    return (

        <CardPokemon>
            <h4>Description:</h4>
  <p>Name: {pokemon.name}</p>
  <p>Weight: {pokemon.weight} kg</p>
  {pokemon.types && <p>Type: {pokemon.types[0].type.name}</p>}
  {pokemon.sprites && (<img src={pokemon.sprites.front_default} alt={pokemon.name}/>)}
         </CardPokemon>
      
    )
  }