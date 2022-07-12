import styled from "styled-components";

export const LoginBox = styled.div`
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
`
export const InputLog = styled.input`
width: 270px;
height: 25px;
margin-left: 20px;
`
export const ButtonBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`
export const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
flex-grow: 1;
color: white;
`
export const Painel = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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

export const Hum = styled.h1`
position: relative;
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
`
export const InputBox = styled.div`
margin-top: 40px;
display: flex;
flex-direction: column;
padding: 10px;
align-items: center;
width: 450px;
height: 250px;
gap: 5px;

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
export const ContainerDetail = styled.div`
margin-top: 100px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`
export const Footer = styled.div`
background-color: rgba(6, 13, 3, 0.8);
color: black;
text-decoration: none;

`