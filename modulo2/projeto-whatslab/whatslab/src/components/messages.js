import React from "react";
import App from "../App.css";

 
export class RandomMessage extends React.Component {
    state = {
        users: [
            {
                nome: <img className="profile" src='https://i.pinimg.com/originals/b8/45/ec/b845ec72d1c359eba9a3a74b271bf53c.jpg' />,
                message: "Hi Stayy..."
              },  
              {
                nome: <img className="profile" src='https://i.pinimg.com/originals/17/74/d3/1774d302358bbe55cc10feeaf6d6d3b6.jpg' />,
                message: "Hello!!!"
              },
              {
                nome: <img className="profile" src='https://robohash.org/2ZP.png?set=set4' />,
                message: "[Visible Only to you: Upgrage to premium, to enjoy all benefits, like being able to upload you profile picture!]"
              }, 
              {
                nome: <img className="profile" src='https://pbs.twimg.com/media/EUKgh3BXQAExIvL?format=jpg' />,
                message: "STAAAY!!!"
              },
        ]
    };

        addMessage = (random) => {
            if (username === true)
            return (
                this.setState({random})
            )
        }   
}