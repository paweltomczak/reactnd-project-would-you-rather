import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './Nav';
import SignIn from './SignIn';
import QuestionsPage from './QuestionsPage';
import AddQuestion from './AddQuestion';
import Leaderboard from './Leaderboard';
import QuestionDetails from './QuestionDetails';

import { setInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(setInitialData());
  }
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <header>
            <h1>Would you rather?</h1>
            <p>
              Would you rather is a game when you can answer or ask questions.
            </p>
          </header>
          <div className='content'>
            {this.props.authedUser === null && (
              <Route path='/' component={SignIn} />
            )}
            {this.props.authedUser && (
              <Fragment>
                <Switch>
                  <Route path='/' exact component={QuestionsPage} />
                  <Route path='/add' component={AddQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/questions/:qid' component={QuestionDetails} />
                </Switch>
              </Fragment>
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
