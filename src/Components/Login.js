import React from 'react';
import Axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {} ,
      message: null
    }
  }

  componentDidMount() {
    Axios.get('http://0.0.0.0:9000/login')
      .then(request => {
        console.log('request');
        console.log(request);

        this.setState({ user: request.data.user, message: request.data.message })
      })
      .catch(error => {
        this.setState({ message: 'Network Error' });
        if (!error.status) {
          return false
        }
      });
  }

  render() {
    let err;
    if (this.state.message) {
      err = <div>{ this.state.message }</div>
    } else {
      err = <span></span>
    }

    return (
      <div>
        Login
        { err }
      </div>
    )
  }
};
