import React from 'react'
import Card from '../Feed/cardFeed'
import CommentCard from './commentCard'
import X from '../Assets/x.png'
import { Input, ButtonEnter, DivPost, DivLine, Header, BoxLogo,
         Color1, Color2, Color3, Color4, StyledP, Ximg  } from './styled'
         import { useNavigate } from 'react-router-dom'
         import { goFeed, goLogin } from '../Routes/Coordinator'

export default function Post() {
  const navigate = useNavigate()
  return (
    <div>
        <Header><Ximg src={X} onClick={() => goFeed(navigate)}/>
    <BoxLogo>
  <Color1/> <Color3/>
  <Color2/> <Color4/>
  </BoxLogo>
  <StyledP onClick={() => goLogin(navigate)}>Logout</StyledP>
  </Header>
      <DivPost>
        {/* <Card/> */}
        <Input placeholder='Deixe seu comentário...'/>
        <ButtonEnter>Responder</ButtonEnter>
        <DivLine></DivLine>
        </DivPost>
        <div>
          <CommentCard/>
        </div>
    </div>
  )
}
