import React from 'react';
import session from '../models/Session';
import {hashHistory, Link} from 'react-router';

const Login = React.createClass({
  loginUser: function(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    session.save({
      username: username,
      password: password
    }, {
      success: function(model, response) {
        window.localStorage.setItem('authtoken', response._kmd.authtoken);
        model.unset('password');
        hashHistory.push('/');
      },
      error: function(response) {
        console.log('error: ' + response);
      }
    });
  },
  render: function() {
    return (
      <form className="login-form" onSubmit={this.loginUser}>
        <input id="username" type="text" name="username" placeholder="username" ref="username"/>
        <input id="password" type="password" name="password" placeholder="password" ref="password"/>
        <input type="submit" name="submit" value="submit"/>
      </form>
    );
  }
});

export default Login;
