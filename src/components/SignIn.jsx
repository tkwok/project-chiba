import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';
import { moment } from 'moment';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        emailMessage: '',
        passwordMessage: '',
        serverMessage: ''
      }
    };
  }

  signIn() {
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      console.log(error);
      //this.setState({error: {serverMessage: error}});
    });
  }

  checkSigninValidation() {
    const { email, password } = this.state;
    let emailValidationRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passwordLengthValidationRegExp = /^(?=.{8,})/;
    let emailMessage = null;
    let passwordMessage = null;

    if (email) {
      emailMessage = (!emailValidationRegExp.test(email)) ? 'Please enter a valid email address' : null;
    } else {
      emailMessage = 'Please enter an email address';
    }

    if (password) {
      passwordMessage = (!passwordLengthValidationRegExp.test(password)) ? 'Password must be 8 characters or longer' : null;
    } else {
      passwordMessage = 'Please enter a password';
    }

    if (!emailMessage || !passwordMessage) this.signIn();
    this.setState({error: { emailMessage, passwordMessage }});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="container-center responsive signin-container-background">
            <div className="form-group">
              <h2><strong>Sign In</strong></h2>
              <h5>Please enter your email address and password to continue</h5>
              <div className="form-group input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-envelope"></i>
                </span>
                <input
                  className="form-control"
                  type="text"
                  placeholder="email address"
                  onChange={event => this.setState({email: event.target.value})}
                />
              </div>
              <div className="input-error">{this.state.error.emailMessage}</div>
              <div className="form-group input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-lock"></i>
                </span>
                <input
                  className="form-control"
                  type="password"
                  placeholder="password"
                  onChange={event => this.setState({password: event.target.value})}
                />
              </div>
              <div className="input-error">{this.state.error.passwordMessage}</div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  type="button"
                  onClick={() => this.checkSigninValidation()}
                  >
                  Submit
                </button>
                <div className="text-error">{this.state.error.serverMessage}</div>

              </div>
              <div className="col-sm-12 nopadding">
                <div className="col-sm-6 nopadding"><Link to={'/signup'}>Create a new account</Link></div>
                <div className="col-sm-6 text-align-right responsive nopadding"><Link to={'/help'}>Need help?</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// <div>{this.state.error.message}</div>


export default SignIn;
