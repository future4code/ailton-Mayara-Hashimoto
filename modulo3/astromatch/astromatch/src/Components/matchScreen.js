import React,  {useEffect, useState } from 'react'
import { userMatch } from './api';
import styled from 'styled-components';
import Logo from '../Assets/match.jpg'


const MainBoxu = styled.div`
background-color: #bda8d6;
border-radius: 10px;
width: 400px;
height: 600px;
`
const Matcher = styled.img`
width: 45px;
height: 45px; 
border-radius: 30px;
margin-right: 5px;
`
const Boxu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
cursor: pointer;
:hover {
    background-color: rgba(186, 134, 202, 0.68);
    border-radius: 30px;
};
`
const Container = styled.div`
margin-top: 5px;
display: flex;
justify-content: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
const BackButton = styled.button `
background-color: pink;
font-weight: bold;
border: none;
padding: 5px 5px;
margin: 5px;
flex-direction: row;
align-items: center;
justify-content: center;
border-radius: 10px;
cursor: pointer;
:hover {
    background-color: rgba(168, 205, 214, 0.68);
}
`
const Logos = styled.img` 
border-radius: 10px;
`

export default function MatchScreen (props) {

    const [match, setMatch] = useState([]);

    useEffect (() => {
        userMatch(setMatch)
    }, [])

    return (
        <Container>
        <MainBoxu>
        <Logos src={Logo}/>
        <div>
            <BackButton onClick={() => props.setTela("home")}>Go Back For More Matches</BackButton>
            </div>
            <div>
                {match?.map((item) => {
                    return <Boxu key={item.id}>
                       <Matcher src={item.photo}/> <p>{item.name}, {item.age}</p>
                    </Boxu>
                })}
            </div>
        </MainBoxu>
        </Container>
    )
}