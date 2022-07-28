import React, { useContext, useEffect, useState } from 'react'
import { Header, BoxLogo, Color1, Color2, Color3, Color4, StyledP, ButtonEnter,
         DivPost, Input, DivLine, InputTitle, Loading, PNav, PAtual, DivNav, Container } from './styled'
import { useNavigate } from 'react-router-dom'
import { goLogin } from '../Routes/Coordinator'
import Card from './cardFeed'
import { CreatePost } from '../Components/api'
import { useForm } from '../Components/hooks'
import { GlobalContext } from '../Components/GlobalContext'
import load from '../Assets/load.gif'

export default function Feed() {
  const navigate = useNavigate()
  const { form, onChange, clearForm } = useForm({title: "", body:""})
  const { list, setCounter, counter, page, setPage } = useContext(GlobalContext)
    const onPost = async (event) => {
      event.preventDefault()
      await CreatePost(form)
      clearForm()
      setCounter()
    }; 

  return (
    <Container>
      
  <Header>
    <BoxLogo>
  <Color1/> <Color3/>
  <Color2/> <Color4/>
  </BoxLogo>
  <StyledP onClick={() => {goLogin(navigate)
            localStorage.setItem("token", "")}}>Logout</StyledP>
  </Header>
  { !list && <Loading src={load}/>}
  { list && 
    <>
  <DivPost onSubmit={onPost}>
    <InputTitle placeholder='Titulo' onChange={onChange} value={form.title} name={"title"} />
    <Input placeholder='Escreva seu post...' onChange={onChange} value={form.body} name={"body"}/>
    <ButtonEnter >Postar</ButtonEnter>
  </DivPost>
  <DivLine></DivLine>
  { list && list.data?.map((item) => {
    return <Card item={item} key={item.id}/> }) }
    <DivNav>
    {page - 2 > 0 && (
              <PNav onClick={() => setPage(page - 2)}>
                {page - 2}
              </PNav>
            )}
            {page - 1 > 0 && (
              <PNav onClick={() => setPage(page - 1)}>
                {page - 1}
              </PNav>
            )}
            <PAtual>{page}</PAtual>

              <PNav onClick={() => setPage(page + 1)}>
                {page + 1}
              </PNav>


              <PNav onClick={() => setPage(page + 2)}>
                {page + 2}
              </PNav>

    </DivNav>
    </> }
    </Container>
  )
}
