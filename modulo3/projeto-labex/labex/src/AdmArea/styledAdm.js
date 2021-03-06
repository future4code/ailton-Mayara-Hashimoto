import styled from "styled-components";

export const LoginBox = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
gap: 5px;
`
export const Box = styled.div`
width: 50vh;
height: 50vh;
background-color: rgba(255, 255, 255, 0.49);
margin-top: 25vh;
display: flex;
flex-direction: column;
gap: 15px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 250px;
}
`
export const InputLog = styled.input`
width: 270px;
height: 25px;
margin-left: 20px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 200px;
}
`
export const ButtonBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width:200px;
}

`
export const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
flex-grow: 1;
color: white;
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
export const Painel = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 30px;
padding-top: 30px;
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

export const Hum = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const BoxList = styled.div`
margin-top: 40px;
background-color: rgba(249, 251, 239, 0.57);
display: flex;
padding: 10px;
align-items: center;
width: 450px;
height: 50px;
:Hover{
        background-color: rgba(211, 202, 100, 0.64);
    }
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
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 250px;
  margin-top: 25px;
}
`
export const InputBox = styled.form`
margin-top: 40px;
display: flex;
flex-direction: column;
padding: 10px;
align-items: center;
width: 450px;
height: 210px;
gap: 5px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 250px;
}
`

export const Button = styled.button`
width: 100px;
height: 30px;
margin-right: 15px;
background-color: rgba(134, 190, 223, 0.51);
border: none;
    :Hover{
        background-color: rgba(211, 202, 100, 0.64);
    }
 
`
export const DetailBox = styled.div`
background-color: rgba(134, 190, 223, 0.51);
width: 400px;
height: 300px;
display: flex;
flex-direction: column;
justify-content: center;
justify-content: space-around;
align-items: center;
word-break: break-all;
word-wrap: break-word;
@media screen and (min-device-width : 320px) {
margin-bottom: 10px;
}
`
export const ContainerDetail = styled.div`
margin-top: 100px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
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
@media screen and (min-device-width : 320px) {
flex-wrap: wrap;
margin-bottom: 10px;
}
`
export const Footer = styled.div`
background-color: rgba(6, 13, 3, 0.8);
color: black;
text-decoration: none;

`
export const BoxCandidate = styled.div`
display: flex;
flex-direction: column;
`
export const DetailStyle = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
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
export const DetailButton = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin: 5px;
`
export const CandidateStyle = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
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
export const ButtonDel = styled.button`
background-color: rgba(134, 190, 223, 0.51);
width: 25px;
height: 25px;
margin-right: 25px;
margin-top: 40px;
border-radius: 50px;
border: none;
cursor: pointer;
    :Hover{
        background-color: rgba(158, 141, 160, 0.88);
    }
    p{
      font-weight: bold;
    }

`
export const BoxRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
