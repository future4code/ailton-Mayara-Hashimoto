import React, { useEffect, useState } from 'react'
import { Header, BoxLogo, Color1, Color2, Color3, Color4, StyledP, ButtonEnter,
         DivPost, Input, DivLine, InputTitle } from './styled'
import { useNavigate } from 'react-router-dom'
import { goLogin } from '../Routes/Coordinator'
import Card from './cardFeed'
import { GetPost, CreatePost } from '../Components/api'
import { useForm } from '../Components/hooks'

export default function Feed() {
  const [counter, setCounter] = useState(0)
  const navigate = useNavigate()
  const [list, setList] = useState("")
  const { form, onChange, clearForm } = useForm({title: "", body:""})

    const onPost = async (event) => {
      event.preventDefault()
      await CreatePost(form)
      clearForm()
      setCounter()
    };
  useEffect (() => {
    const listPosts = async () => {
      const postList = await GetPost()
      setList(postList)
    };
      listPosts()
  },[counter]) 

  return (
    <div>
      
  <Header>
    <BoxLogo>
  <Color1/> <Color3/>
  <Color2/> <Color4/>
  </BoxLogo>
  <StyledP onClick={() => goLogin(navigate)}>Logout</StyledP>
  </Header>
  <DivPost onSubmit={onPost}>
    <InputTitle placeholder='Titulo' onChange={onChange} value={form.title} name={"title"} />
    <Input placeholder='Escreva seu post...' onChange={onChange} value={form.body} name={"body"}/>
    <ButtonEnter >Postar</ButtonEnter>
  </DivPost>
  <DivLine></DivLine>
  { list && list.data?.map((item) => {
    return <Card item={item} key={item.id}/> }) }
    
    </div>
  )
}
