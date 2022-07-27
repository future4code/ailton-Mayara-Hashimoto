import React, { useContext, useEffect, useState } from 'react'
import Card from '../Feed/cardFeed'
import CommentCard from './commentCard'
import X from '../Assets/x.png'
import { Input, ButtonEnter, DivPost, DivLine, Header, BoxLogo, Color1, Color2, Color3, Color4, StyledP, Ximg  } from './styled'
import { useNavigate, useParams } from 'react-router-dom'
import { goFeed, goLogin } from '../Routes/Coordinator'
import { GlobalContext } from '../Components/GlobalContext'
import { GetComments, CreateComment } from '../Components/api'
import { useForm } from '../Components/hooks'


export default function Post() {
  const navigate = useNavigate()
  const [ commentu, setCommentu] = useState()
  const { form, onChange, clearForm } = useForm({ body:"" })
  const params = useParams()
  const { list } = useContext(GlobalContext)
  const onComment = async (event) => {
    event.preventDefault()
    await CreateComment(form, params.id)
    clearForm()
    // setCounter()
  }; 
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
 }, [postContent]);


 

 console.log(commentu);

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
  { !commentu&& <p>LOADING!</p>}
  { commentu && 
    <>
      <DivPost>
        { postContent && <Card item={postContent[0]}/> }
        <Input name={"body"} value={form.body} onChange={onChange} placeholder='Deixe seu comentário...'/>
        <ButtonEnter onClick={onComment}>Responder</ButtonEnter>
        <DivLine></DivLine>
        </DivPost>
        <div>
        { commentu && commentu?.map((item) => {
          return  <CommentCard item={item} key={item.id}/>
        }) }
         
        </div>
        </> }
    </div>
  )
}
