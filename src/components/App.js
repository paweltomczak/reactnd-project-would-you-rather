import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './Nav';
import SignIn from './SignIn';
import QuestionsPage from './QuestionsPage';
import AddQuestion from './AddQuestion';
import Leaderboard from './Leaderboard';
import QuestionDetails from './QuestionDetails';

import { getUsers } from '../actions/users';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <div className='content'>
            {this.props.authedUser === null && (
              <Route path='/' component={SignIn} />
            )}
            {this.props.authedUser && (
              <div>
                <Route path='/' exact component={QuestionsPage} />
                <Route path='/add' component={AddQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/questions/:qid' component={QuestionDetails} />
              </div>
            )}
            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
