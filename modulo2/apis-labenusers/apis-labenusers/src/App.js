import React from "react";
import axios from 'axios';
import { ScreenOne } from './components/screenOne';
import { ScreenTwo } from './components/screenTwo';



class App extends React.Component {
  state = {
    screens: "SignUp",
    users: [],
    inputName: "",
    inputEmail:"",
  }

  onChangeName = (event) => {
    this.setState({inputName: event.target.value})
  };
  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  };

  componentDidMount() {
    this.getUsers();
  }
  // componentDidUpdate() {
  //   this.postUsers();
  // };
  
  postUsers = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };
    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
      {
        headers: {
          Authorization: "mayara-hashimoto-ailton"
        } 
      })
      .then((response) => {
      window.alert("User added!")
    }).catch((error) => {
      window.alert(error.message)
    });
  };

  getUsers = () => {
    axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "mayara-hashimoto-ailton"
      }
    }
    ).then((response) => {
      this.setState({users: response.data})
    }).catch((error) => {
     console.log(error.message)
    })
  };
  delUsers = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
  .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: "mayara-hashimoto-ailton"
      }
    }
    )
    const newList = this.state.users.filter((item) => {
      return item.id !== id
    })
    this.setState({users: newList})
    }
    
  };

goScreenOne = () => {
  this.setState({screens:"SignUp"});
};

goScreenTwo = () => {
  this.setState({screens:"UserList"});
};

pickScreen = () => {
  switch (this.state.screens) {
    case "SignUp":
      return <ScreenOne goScreenTwo={this.goScreenTwo}
              onChangeEmail={this.onChangeEmail}
              onChangeName={this.onChangeName}
              inputName={this.inputName}
              postUsers={this.postUsers}
              />;
    break;
    case "UserList":
      return <ScreenTwo goScreenOne={this.goScreenOne}
              getUsers={this.getUsers}
              delUsers={this.delUsers}
              userList={this.state.users}
             />;
    break;
  }
}
render() {
   
  return <div> 
    {this.pickScreen()}

         </div>

}

};

export default App;
