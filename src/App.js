import React, { Component } from 'react';
import './App.css';
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    username: "Dieter"
  };

  changeUsername = (event) => {
    const newUsername = event.target.value;
    this.setState({username: newUsername});
  };

  render() {
    const {username} = this.state;
    return (
      <div className="App">
        <UserInput changed={this.changeUsername.bind(this)} username={username}/>
        <UserOutput username={username}/>
        <UserOutput username={username}/>
        <UserOutput username={username}/>
        <UserOutput username={username}/>
      </div>
    );
  }
}

export default App;
