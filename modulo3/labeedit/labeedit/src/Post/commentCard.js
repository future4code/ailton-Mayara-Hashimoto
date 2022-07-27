import React from 'react'
import  Like  from '../Assets/like.png'
import  Unlike  from '../Assets/unlike.png'
import { DivImages, PostSender, PostText, DivPosts, Resize,
         BoxVotes,  Numbers } from './styled'

         
export default function CommentCard({item}) {
  
  return (
    <div>
  <DivPosts>
    <PostSender>Enviado por: {item.username}</PostSender>
    <PostText>{item.body}</PostText>
    <DivImages>
      <BoxVotes><Resize src={Like}/><Numbers>{item.voteSum}</Numbers> <Resize src={Unlike}/>
      </BoxVotes> 
    </DivImages>
  </DivPosts>
    </div>
  )
}

