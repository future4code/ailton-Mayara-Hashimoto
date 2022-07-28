import React from 'react'
import  Comment  from '../Assets/comments.png'
import  Like  from '../Assets/like.png'
import  Unlike  from '../Assets/unlike.png'
import { DivImages, PostSender, PostText, DivPosts, Resize,
         BoxVotes, ResizeComment, Numbers } from './styled'
import { goPost } from '../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import { ChangePVote, DeleteVote } from '../Components/api'
import SLike from '../Assets/seta.png'
import DLike from '../Assets/outraseta.png'

export default function Card({item}) {
    const navigate = useNavigate()

    const like = (body) => {
      ChangePVote(body, item.id)
    };
    const remove = () =>{
      DeleteVote(item.id)
    };

  return (
    <div>
    <DivPosts onClick={() => goPost(navigate, item.id)}>
    <PostSender>Enviado por: {item.username}</PostSender>
    <PostText>{item.title}</PostText>
    <PostText>{item.body}</PostText>
    <DivImages>

    <BoxVotes>
    { item.userVote === 1 && <Resize src={SLike} onClick={remove}/> }
    { item.userVote !== 1 &&
      <Resize src={Like} onClick={() => {like({direction : 1})}} /> }
      <Numbers>{item.voteSum}</Numbers>
    { item.userVote === -1 && <Resize src={DLike} onClick={remove}/> }
    { item.userVote !== -1 &&   
      <Resize src={Unlike} onClick={() => {like({direction : -1})}} /> }
    </BoxVotes> 

      <BoxVotes>
        
        <ResizeComment scr={Comment}/>
        <Numbers>{item.commentCount}</Numbers>
        </BoxVotes> 
    </DivImages>
  </DivPosts>
    </div>
  )
}
