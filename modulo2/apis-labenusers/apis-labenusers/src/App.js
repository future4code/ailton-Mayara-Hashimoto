import React from "react";
import { ScreenOne } from './components/screenOne';
import { ScreenTwo } from './components/screenTwo';



class App extends React.Component {
  state = {
    screens: "SignUp"
  }

goScreenOne = () => {
  this.setState({screens:"SignUp"});
};

goScreenTwo = () => {
  this.setState({screens:"UserList"});
};

pickScreen = () => {
  switch (this.state.screens) {
    case "SignUp":
      return <ScreenOne goScreenTwo={this.goScreenTwo}/>;
    break;
    case "UserList":
      return <ScreenTwo goScreenOne={this.goScreenOne}/>;
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
