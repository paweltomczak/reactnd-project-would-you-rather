import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/questions';

class QuestionsPage extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestions());
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Unanswered Questions</h3>
        <ul>
          {!this.props.loading &&
            this.props.ununsweredQuestions.map((question) => (
              <li>{question.id}</li>
            ))}
        </ul>
        <h3>Answered Questions</h3>
        <ul>
          {!this.props.loading &&
            this.props.answeredQuestions.map((question) => (
              <li>{question.id}</li>
            ))}
        </ul>
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
