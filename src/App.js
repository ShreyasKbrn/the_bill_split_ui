import React, { Component } from 'react'
import axios from 'axios';

import Users from './components/user';

export default class App extends Component {
  state = {
    profiles: []
  };

  getUsersFromServer = async () => {
      return axios.get('https://my-json-server.typicode.com/ShreyasKbrn/the_bill_split_mocky/profile/');
  }

  constructor(props) {
    super(props);
    this.getUsersFromServer().then((response) => {
      this.setState({profiles: [...response.data]})
    });
  }

  render() {
    
    return (
      <div>
        <Users profiles = {this.state.profiles}></Users>
      </div>
    )
  }
}
