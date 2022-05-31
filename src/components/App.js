import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from './Nav';
import SignIn from './SignIn';

import { getUsers } from '../actions/users';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  render() {
    return (
      <div className='container'>
        <Nav />
        <div className='content'>
          {(!this.props.loading && this.props.authedUser === null) && <SignIn />}
          {this.props.authedUser && `Here will be questions after log in`}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    loading: Object.keys(users).length === 0,
  };
}

export default connect(mapStateToProps)(App);
