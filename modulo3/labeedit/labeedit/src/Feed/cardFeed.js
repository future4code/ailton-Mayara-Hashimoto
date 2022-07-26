import React from 'react'
import  Comment  from '../Assets/comments.png'
import  Like  from '../Assets/like.png'
import  Unlike  from '../Assets/unlike.png'
import { DivImages, PostSender, PostText, DivPosts, Resize,
         BoxVotes, ResizeComment, Numbers } from './styled'

export default function Card() {
  return (
    <div>
    <DivPosts>
    <PostSender>Enviado por: Usuario</PostSender>
    <PostText>Texto do post; This is a random text to check if the word break all is working propely</PostText>
    <DivImages>
      <BoxVotes><Resize src={Like}/><Numbers>12</Numbers> <Resize src={Unlike}/><Numbers>0</Numbers></BoxVotes> 
      <BoxVotes><ResizeComment scr={Comment}/><Numbers>232</Numbers></BoxVotes> 
    </DivImages>
  </DivPosts>
    </div>
  )
}
