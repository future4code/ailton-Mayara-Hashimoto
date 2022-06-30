import React, { Component } from 'react'
import styled from 'styled-components'


const Reco = styled.h3`
color: #ffddd2;
`
const Cards = styled.div` 
@media only screen and (min-device-width: 400px){
border: 2px;
border-color: black;
display: flex;
justify-content: space-between;}
`
const Img = styled.img `
:hover { animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
`


export default class Home extends Component {

 

  render() {
    
   

    return (
      <div> 
        <div>
            <Reco>recomendations & new releases </Reco>
            <div>
         <Cards>
          <Img src={'https://iili.io/jHX8sS.jpg'} alt={"Nayeon"}/>
          <Img src={'https://iili.io/jHXUq7.jpg'} alt={"Stray Kids"}/> 
          <Img src={'https://iili.io/jHXjJs.jpg'} alt={"MIW"}/> 
          <Img src={'https://iili.io/jHXOb4.jpg'} alt={"Jessi"}/> 
          <Img src={'https://iili.io/jHXNef.jpg'} alt={"TXT"}/> 
          <Img src={'https://iili.io/jHXkzl.jpg'} alt={"Ariana Grande"}/> 
        </Cards>

      

        
            </div>

           
        </div>
      </div>
    )
  }
}
