import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import SignIn from './SignIn';
import QuestionsPage from './QuestionsPage';
import AddQuestion from './AddQuestion';
import Leaderboard from './Leaderboard';

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
          <Routes>
            {this.props.authedUser === null && (
              <Route path='/' element={<SignIn />} />
            )}
            {this.props.authedUser && (
              <>
                <Route path='/' element={<QuestionsPage />} />
                <Route path='/add' element={<AddQuestion />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
              </>
            )}
            <Route path='*' element={<SignIn />} />
          </Routes>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
