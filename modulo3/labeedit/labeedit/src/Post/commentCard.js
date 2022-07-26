import React from 'react'
import  Like  from '../Assets/like.png'
import  Unlike  from '../Assets/unlike.png'
import { DivImages, PostSender, PostText, DivPosts, Resize,
         BoxVotes,  Numbers } from './styled'

         
export default function CommentCard() {
  
  return (
    <div>
  <DivPosts>
    <PostSender>Enviado por: Usuario</PostSender>
    <PostText></PostText>
    <DivImages>
      <BoxVotes><Resize src={Like}/><Numbers>12</Numbers> <Resize src={Unlike}/><Numbers>0</Numbers></BoxVotes> 
    </DivImages>
  </DivPosts>
    </div>
  )
}

