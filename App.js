import React, { Component } from 'react';
import axios from "axios";


import Username from './userForm';

class App extends Component {

  state={
    repos:null
  }
  getUser=(e)=>{
    e.preventDefault();
    const user =e.target.elements.username.value
    if(user){
    axios.get(`https://api.github.com/users/${user}`)
    .then((res)=>{
      const repos=res.data.public_repos;
      this.setState({repos});
    })
  }
    else return;
    
  }


  render() {
    return (
      <div>
       <Username getUser={this.getUser}/>
       {this.state.repos ?this.state.repos :<p>enter username</p>}
      </div>
    );
  }
}

export default App;
