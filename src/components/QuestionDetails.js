import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/shared';

class QuestionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionValue: '',
    };
  }
  handleOption = (e) => {
    const optionValue = e.target.value;
    this.setState({ optionValue });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { authedUser, dispatch } = this.props;
    const { id } = this.props.questionDetails;
    const answer = this.state.optionValue;
    dispatch(handleSaveQuestionAnswer(authedUser, id, answer));
  };
  render() {
    const { author, avatarURL, questionDetails } = this.props;
    return (
      <div>
        {this.props.isVoted ? (
          <div>Your vote is:</div>
        ) : (
          <div className='question-container'>
            <div className='question-author'>
              <h3>{author} asks:</h3>
            </div>
            <div
              className='question-image'
              style={{
                backgroundImage: `url(${avatarURL})`,
              }}
            ></div>
            <div className='question-details'>
              <h3>Would you rather</h3>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <input
                    type='radio'
                    name='OptionOne'
                    value='optionOne'
                    onChange={this.handleOption}
                  />
                  ...{questionDetails.optionOne.text}...
                </label>
                <span style={{ display: 'block' }}>-- OR --</span>
                <label>
                  <input
                    type='radio'
                    name='OptionOne'
                    value='optionTwo'
                    onChange={this.handleOption}
                  />
                  ...{questionDetails.optionTwo.text}...
                </label>
                <button type='submit' disabled={!this.state.optionValue}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, props) {
  const { qid } = props.match.params;
  const questionDetails = questions[qid];
  return {
    authedUser,
    author: questionDetails ? users[questionDetails.author].name : null,
    avatarURL: questionDetails ? users[questionDetails.author].avatarURL : null,
    questionDetails,
    isVoted: questions
      ? questions[qid].optionOne.votes.includes(authedUser) ||
        questions[qid].optionTwo.votes.includes(authedUser)
      : null,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
