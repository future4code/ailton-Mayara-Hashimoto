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
          state ={
            users: [
              {
                username: 'paulinhas_notonfire',
                profile: <img src="https://picsum.photos/50/50"/>,
                update: <img src="https://picsum.photos/200/150"/>
              },
              {
                username: 'i.n.ahhh',
                profile: <img src="https://i.pinimg.com/564x/28/c6/1c/28c61c77c0330d19925620b7f870033c.jpg"/>,
                update: <img src="https://i.pinimg.com/564x/1f/b0/57/1fb0570713350667f2dda43c626959d4.jpg"/>,
              },
              {
                username: 'hyun.nie',
                profile:<img src="https://i.pinimg.com/564x/2f/05/9c/2f059c46010bb8e77018a95740235a6c.jpg"/>,
                update: <img src="https://i.pinimg.com/564x/b7/52/a9/b752a968a6555ffe0d0d1c6c9d1f6278.jpg"/>,
              },              
            ],
            valorInputUser:"",
            valorInputProfile: "",
            valorInputUpdate: "",
          };

          addUser = () => {

            const newUser = {
              username: this.state.valorInputUser,
              profile: this.state.valorInputProfile,
              update: this.state.valorInputUpdate
            };

            const user = [...this.state.users, newUser];
              this.setState({users: user});
          };
        
        onChangeInputUser = (event) => {
          this.setState({ valorInputUser: event.target.value });
        };
        onChangeInputProfile = (event) => {
          this.setState({ valorInputProfile: event.target.value });
        };
        onChangeInputUpdate = (event) => {
          this.setState({ valorInputUpdate: event.target.value });
        };


  render() {
    
    const moreUsers = this.state.users.map((account) => {
      return (
        <Post>
          {account.username} - {account.profile} - {account.update}
        </Post>
      );
    });
   
    return (
      <MainContainer>
       
<h4>Creat a New Post</h4>
        <input
            value={this.state.valorInputUser}
            onChange={this.onChangeInputUser}
            placeholder={"Username"}
          />
           <input
            value={this.state.valorInputProfile}
            onChange={this.onChangeInputProfile}
            placeholder={"Profile Pìcture"}
          />
           <input
            value={this.state.valorInputUpdate}
            onChange={this.onChangeInputUpdate}
            placeholder={"New Update"}
          />
          <div>
           <button onClick={this.addUser}>Make It Pretty!</button>
          </div>
              <div>{moreUsers}</div>
              
        <Post>
          {moreUsers}
        </Post>
       
      </MainContainer>
    );
  }
}

export default App;
