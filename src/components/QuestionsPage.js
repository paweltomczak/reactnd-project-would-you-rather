import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/questions';
import Loading from './Loading';

class QuestionsPage extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestions());
  }
  render() {
    return (
      <div className='questions-container'>
        {this.props.loading ? (
          <Loading />
        ) : (
          <div className='questions-tabs'>
            <input id='tab1' type='radio' name='tabs' defaultChecked />
            <label htmlFor='tab1'>Unanswered Questions</label>
            <input id='tab2' type='radio' name='tabs' />
            <label htmlFor='tab2'>Answered Questions</label>
            <div id='content1'>
              <ul>
                {this.props.ununsweredQuestions.map((question) => (
                  <li>{question.id}</li>
                ))}
              </ul>
            </div>
            <div id='content2'>
              <ul>
                {this.props.answeredQuestions.map((question) => (
                  <li>{question.id}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  const questionsArr = Object.keys(questions).map((key) => questions[key]);
  return {
    loading: Object.keys(questions).length === 0,
    answeredQuestions: questionsArr.filter(
      (question) =>
        question.optionOne.votes.includes(authedUser) ||
        question.optionTwo.votes.includes(authedUser)
    ),
    ununsweredQuestions: questionsArr.filter(
      (question) =>
        !question.optionOne.votes.includes(authedUser) &&
        !question.optionTwo.votes.includes(authedUser)
    ),
  };
}

export default connect(mapStateToProps)(QuestionsPage);
