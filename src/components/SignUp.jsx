import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
  }

  signUp() {
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      console.log('error', error);
      this.setState({error});
    });
  }

  render() {
    return (
      <div className="form-inline">
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={event => this.setState({password: event.target.value})}
          />
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => this.signUp()}
          >
          Sign Up
        </button>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signin'}>Already a user? Signin instead.</Link></div>
      </div>
    );
  }
};

export default SignUp;
