import React from 'react'
import  Comment  from '../Assets/comments.png'
import  Like  from '../Assets/like.png'
import  Unlike  from '../Assets/unlike.png'
import { DivImages, PostSender, PostText, DivPosts, Resize,
         BoxVotes, ResizeComment, Numbers } from './styled'
import { goPost } from '../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'

export default function Card({item}) {
    const navigate = useNavigate()

  return (
    <div>
    <DivPosts onClick={() => goPost(navigate, item.id)}>
    <PostSender>Enviado por: {item.username}</PostSender>
    <PostText>{item.title}</PostText>
    <PostText>{item.body}</PostText>
    <DivImages>
      <BoxVotes><Resize src={Like}/><Numbers>{item.voteSum}</Numbers> <Resize src={Unlike}/></BoxVotes> 
      <BoxVotes><ResizeComment scr={Comment}/><Numbers>{item.commentCount}</Numbers></BoxVotes> 
    </DivImages>
  </DivPosts>
    </div>
  )
}
