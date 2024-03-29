import React from 'react'
import  Like  from '../Assets/like.png'
import  Unlike  from '../Assets/unlike.png'
import { DivImages, PostSender, PostText, DivPosts, Resize, BoxVotes,  Numbers } from './styled'
import { ChangeCVote, DeleteComVote } from '../Components/api'
import SLike from '../Assets/seta.png'
import DLike from '../Assets/outraseta.png'
         
export default function CommentCard({item, counter, setCounter, setCommentu}) {

  const like = async (body) => {
    await ChangeCVote(body, item.id)
    setCounter(counter + 1)
    setCommentu("")
  };
  const remove = async () =>{
   await DeleteComVote(item.id)
    setCounter(counter + 1)
    setCommentu("")
  };
  
  return (
    <div>
  <DivPosts>
    <PostSender>Enviado por: {item.username}</PostSender>
    <PostText>{item.body}</PostText>
    <DivImages>
      <BoxVotes>
      { item.userVote === 1 && <Resize src={SLike} onClick={remove}/> }
      { item.userVote !== 1 &&  
      <Resize src={Like} onClick={() => {like({direction : 1})}} /> }
      <Numbers>{item.voteSum}</Numbers> 
      { item.userVote === -1 && <Resize src={DLike} onClick={remove}/> }
      { item.userVote !== -1 &&  
      <Resize src={Unlike} onClick={() => {like({direction : -1})}}/> }

      </BoxVotes> 
    </DivImages>
  </DivPosts>
    </div>
  )
}

