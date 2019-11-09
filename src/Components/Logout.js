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
    this.setState({ message: 'Logout rendered!' });
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
        Logout page
        { err }
      </div>
    )
  }
};
