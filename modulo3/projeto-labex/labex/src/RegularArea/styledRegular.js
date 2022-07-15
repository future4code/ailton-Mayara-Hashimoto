import styled from "styled-components";

export const Image = styled.img`
width:auto ;
height: auto;
padding: 5px;
opacity: 100%;

`

export const Box = styled.div`
width: 50vh;
height: 60vh;
background-color: rgba(255, 255, 255, 0.49);
margin-top: 25vh;
display: flex;
flex-direction: column;
gap: 50px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 250px;
}
`
export const ButtonBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`
export const Button = styled.button`
width: 100px;
height: 30px;
background-color: rgba(134, 190, 223, 0.51);
color: white;
border: none;
    :Hover{
        background-color: rgba(211, 202, 100, 0.64);
    }
`
export const TripHeader = styled.div`
width: 98px;
margin: 10px;
display: flex;
flex-direction: column;
justify-content: center;
`
export const Header = styled.img`
width: 98px;
height: 54px;
`
export const ButtonList = styled.div`
display: flex;
justify-content: space-around;
padding: 10px;
`
export const CardBox = styled.div`
width: 300px;
background-color: rgba(249, 251, 239, 0.57);
display: flex;
flex-direction: column;
margin: 20px;
padding: 5px;
overflow: auto;
::-webkit-scrollbar-thumb:hover {
  background: rgba(207, 210, 15, 0.62);
}
::-webkit-scrollbar-thumb {
  background: rgba(15, 207, 210, 0.6);
}
::-webkit-scrollbar-track {
  background: #0000;
}
::-webkit-scrollbar {
  width: 7px;
}
`
export const MegaBox = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
overflow: auto;
::-webkit-scrollbar-thumb:hover {
  background: rgba(207, 210, 15, 0.62);
}
::-webkit-scrollbar-thumb {
  background: rgba(15, 207, 210, 0.6);
}
::-webkit-scrollbar-track {
  background: #0000;
}
::-webkit-scrollbar {
  width: 7px;
}
`
export const InputBox = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
padding: 50px;
`

export const Inputs = styled.input`
width: 400px;
height: 30px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 250px;
}

`
export const Selects = styled.select`
width: 400px;
height: 30px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 250px;
}

`
export const Tittle = styled.p`
font-weight: bold;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const Phrase = styled.div`
color: white;
font-size: small;
font-style: italic;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
` 
export const LinkStyle = styled.a`
text-decoration: none;
color: #212529;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
 display: flex;
 justify-content: center;
}
`
export const StyleP = styled.p`
color: #212529;
`