import React, {useState} from "react";
import funds from './Assets/funds.png'
import Homes from './Assets/home.gif'
import styled from "styled-components";
import {Box, ButtonBox, Image, Button} from './RegularArea/styledRegular'
import TripsList from "./RegularArea/tripList";
import JoinTrip from "./RegularArea/jointrip";

const Container = styled.div`
background-image: url(${funds});
background-position: center;
background-size: cover;
height: 100vh;
display: flex;
justify-content: center;
`

function App() {
  const [screen, setScreen] = useState("jointrip")
  return (

    <Container>
      {screen === "home" && 
<Box>
<Image src={Homes}/>
<ButtonBox>
 <Button>Check Trips</Button>
 <Button>LogIn</Button>
 </ButtonBox>
 </Box> }
 {screen === "list" && <TripsList/>}
 {screen === "jointrip" && <JoinTrip/>}

    </Container>
  );
}

export default App;
