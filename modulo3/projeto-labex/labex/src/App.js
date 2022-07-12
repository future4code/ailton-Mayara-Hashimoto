import React from "react";
import funds from './Assets/funds.png'
import styled from "styled-components";
import { Router } from "./Routes/Router";


const Container = styled.div`
background-image: url(${funds});
background-position: center;
background-size: cover;
height: 100vh;
display: flex;
justify-content: center;
`

function App() {
  return (

    <Container>
 <Router/>
    </Container>
  );
}

export default App;
