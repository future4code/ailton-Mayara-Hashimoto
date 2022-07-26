import React from 'react'
import Card from '../Feed/cardFeed'
import CommentCard from './commentCard'
import { Input, ButtonEnter, DivPost, DivLine, Header, BoxLogo,
         Color1, Color2, Color3, Color4, StyledP  } from './styled'
         import { useNavigate } from 'react-router-dom'
         import { goLogin } from '../Routes/Coordinator'

export default function Post() {
  const navigate = useNavigate()
  return (
    <div>
        <Header>
    <BoxLogo>
  <Color1/> <Color3/>
  <Color2/> <Color4/>
  </BoxLogo>
  <StyledP onClick={() => goLogin(navigate)}>Logout</StyledP>
  </Header>
      <DivPost>
        <Card/>
        <Input placeholder='Deixe seu comentário...'/>
        <ButtonEnter>Responder</ButtonEnter>
        <DivLine></DivLine>
        </DivPost>
        <div>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
        </div>
    </div>
  )
}
