import React,  {useEffect, useState } from 'react'
import { userMatch } from './api';
import styled from 'styled-components';
import Logo from '../Assets/logo.png'
import Back from '../Assets/back.png'
import Iu from '../Assets/iu.jpg'
import Im from '../Assets/im.jpg'
import Yuqi from '../Assets/yuqi.jpg'
import Chan from '../Assets/chan.jpg'
import BG from '../Assets/fundo.png'


const MainBoxu = styled.div`
background-color: #bda8d6;
margin-top: 5px;
border-radius: 10px;
width: 400px;
height: 600px;
overflow: auto;
::-webkit-scrollbar-thumb:hover {
  background: #555;
  
}
::-webkit-scrollbar-thumb {
  background: rgba(186, 134, 202, 0.68);
}
::-webkit-scrollbar-track {
  background: pink;
}
::-webkit-scrollbar {
  width: 7px;
}
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
const BoxuNi = styled.div`
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
background-image: url(${BG});
background-position: center;
background-size: cover;
height: 100vh;
display: flex;
justify-content: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
const BackButton = styled.img `
background-color: pink;
width: 79px;
height: 35px;
padding: 5px 5px;
margin: 5px;
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
            <BackButton src={Back} onClick={() => props.setTela("home")} />
            </div>
            <div>
                {match?.map((item) => {
                    return <Boxu key={item.id}>
                       <Matcher src={item.photo}/> <p>{item.name}, {item.age}</p>
                    </Boxu>
                })}
                    <BoxuNi><Matcher src={Im}/> <p>I.M, 26</p></BoxuNi>
                    <BoxuNi><Matcher src={Iu}/> <p>IU, 29</p></BoxuNi>
                    <BoxuNi><Matcher src={Yuqi}/> <p>Yuqi, 22</p></BoxuNi>
                    <BoxuNi><Matcher src={Chan}/> <p>Bang Chan, 26</p></BoxuNi>
               
            </div>
        </MainBoxu>
        </Container>
    )
}
