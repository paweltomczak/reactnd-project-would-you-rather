import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from './Nav';
import SignIn from './SignIn';
import QuestionsPage from './QuestionsPage';

import { getUsers } from '../actions/users';
import Loading from './Loading';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  render() {
    return (
      <div className='container'>
        <Nav />
        <div className='content'>
          {this.props.loading && <Loading />}
          {!this.props.loading && this.props.authedUser === null && <SignIn />}
          {this.props.authedUser && <QuestionsPage />}
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
