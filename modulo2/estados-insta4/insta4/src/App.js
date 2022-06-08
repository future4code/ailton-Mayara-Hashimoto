import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'in.ahhh'}
          fotoUsuario={'https://i.pinimg.com/564x/28/c6/1c/28c61c77c0330d19925620b7f870033c.jpg'}
          fotoPost={'https://i.pinimg.com/564x/1f/b0/57/1fb0570713350667f2dda43c626959d4.jpg'}
        />
         <Post
          nomeUsuario={'hyun.nie'}
          fotoUsuario={'https://i.pinimg.com/564x/2f/05/9c/2f059c46010bb8e77018a95740235a6c.jpg'}
          fotoPost={'https://i.pinimg.com/564x/b7/52/a9/b752a968a6555ffe0d0d1c6c9d1f6278.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
