import React, { useState } from 'react'
import { Texto, PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [curtido, setCurtido] = useState(false);
  const [comentario, setComentario] = useState(false);
  const [addComentario, setAddComentario] = useState([]);

  const onClickCurtida = () => {
    setCurtido(!curtido)
  };

  const onClickComentario = () => {
    setComentario(!comentario)
  };

  const enviarComentario = (comentar) => {
    const novoComentario = [...addComentario, comentar]
    setAddComentario(novoComentario)
    
  }
  const lista = addComentario.map((novaLista, index) => {
    return <Texto key={index}>{novaLista}</Texto>
  })


  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={curtido === false? iconeCoracaoBranco : iconeCoracaoPreto}
          onClickIcone={onClickCurtida}
          valorContador={curtido === false? 0 : 1}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={addComentario.length}
        />
      </PostFooter>

    {comentario === true && <SecaoComentario addComent={enviarComentario}/>}
           {lista} 
    
     
    </PostContainer>
  )
}

export default Post