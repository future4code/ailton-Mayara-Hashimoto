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
import Mail from '../Assets/mail.png'


const MainBoxu = styled.div`
background-color: white;
margin-top: 5px;
width: 400px;
height: 610px;
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
justify-content: space-between;
padding: 10px;
cursor: pointer;
:hover {
    background-color: rgba(186, 134, 202, 0.68);
};
`
const BoxuNi = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 10px;
cursor: pointer;
:hover {
    background-color: rgba(186, 134, 202, 0.68);
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
width: 69px;
height: 30px;
padding: 5px 5px;
margin: 5px;
cursor: pointer;
:hover {
    background-color: rgba(168, 205, 214, 0.68);
}
`
const Logos = styled.img` 
border-radius: 10px;
`
const Message = styled.img`
width: 30px;
height: 20px;
`
const ButtonDiv = styled.div`
display: flex;
justify-content: end;
padding-right: 5px;
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
        <ButtonDiv>
            <BackButton src={Back} onClick={() => props.setTela("home")} />
            </ButtonDiv>
            <div>
                {match?.map((item) => {
                    return <Boxu key={item.id}>
                       <Matcher src={item.photo}/> <p>{item.name}, {item.age}</p> <Message src={Mail}/>
                    </Boxu>
                })}
                    <BoxuNi><Matcher src={Im}/> <p>I.M, 26</p> <Message src={Mail}/></BoxuNi>
                    <BoxuNi><Matcher src={Iu}/> <p>IU, 29</p> <Message src={Mail}/></BoxuNi>
                    <BoxuNi><Matcher src={Yuqi}/> <p>Yuqi, 22</p> <Message src={Mail}/></BoxuNi>
                    <BoxuNi><Matcher src={Chan}/> <p>Bang Chan, 26</p> <Message src={Mail}/></BoxuNi>
               
            </div>
        </MainBoxu>
        </Container>
    )
}
