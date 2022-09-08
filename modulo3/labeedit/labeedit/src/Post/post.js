import React, { useContext, useEffect, useState } from 'react'
import Card from '../Feed/cardFeed'
import CommentCard from './commentCard'
import X from '../Assets/x.png'
import { Input, Loading, ButtonEnter, DivPost, DivLine, Header, BoxLogo, Color1, Color2, Color3, Color4, StyledP, Ximg  } from './styled'
import { useNavigate, useParams } from 'react-router-dom'
import { goFeed, goLogin } from '../Routes/Coordinator'
import { GlobalContext } from '../Components/GlobalContext'
import { GetComments, CreateComment } from '../Components/api'
import { useForm } from '../Components/hooks'
import  loads  from '../Assets/load.gif'


export default function Post() {
  const navigate = useNavigate()
  const [ commentu, setCommentu] = useState()
  const { form, onChange, clearForm } = useForm({ body:"" })
  const params = useParams()
  const { list, setCounter, counter } = useContext(GlobalContext)
  let postContent 
  
  if (list) {
    postContent = list.data.filter((item) => {return item.id === params.id})
  };

 useEffect (() => {
    if (postContent && !commentu) {
    const getComment = async () => {
      await GetComments(params.id, setCommentu)
 }
 getComment()
  };
 }, [postContent, list, counter, commentu]);
 
 const onComment = async (event) => {
  event.preventDefault()
  await CreateComment(form, params.id)
        setCommentu("")
        clearForm()
        setCounter(counter + 1)
}; 
  return (
    <div>
        <Header><Ximg src={X} onClick={() => goFeed(navigate)}/>
    <BoxLogo>
  <Color1/> <Color3/>
  <Color2/> <Color4/>
  </BoxLogo>
  <StyledP onClick={() => {goLogin(navigate) 
            localStorage.setItem("token", "")} }>Logout</StyledP>
  </Header>
  { !commentu && <Loading src={loads}/>}
  { commentu && 
    <>
      <DivPost>
        { postContent && <Card item={postContent[0]} counter={counter} setCounter={setCounter}/> }
        <Input name={"body"} value={form.body} onChange={onChange} placeholder='Deixe seu comentário/Leave your comment'/>
        <ButtonEnter onClick={onComment}>Responder</ButtonEnter>
        <DivLine></DivLine>
        </DivPost>
        <div>
        { commentu && commentu?.map((item) => {
          return  <CommentCard item={item} key={item.id} counter={counter} setCounter={setCounter} setCommentu={setCommentu} />
        }) }
         
        </div>
        </> }
    </div>
  )
}
