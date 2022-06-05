import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/shared';
import Loading from './Loading';

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
    const { author, avatarURL, authedUser } = this.props;
    const { optionOne, optionTwo } = this.props.questionDetails;
    const allVotes = optionOne.votes.length + optionTwo.votes.length;
    const optionOnePrecentage = (
      (optionOne.votes.length / allVotes) *
      100
    ).toFixed(1);
    const optionTwoPrecentage = (
      (optionTwo.votes.length / allVotes) *
      100
    ).toFixed(1);
    return (
      <Fragment>
        {this.props.isLoading ? (
          <Loading />
        ) : (
          <div className='question-container'>
            <div
              className='question-image'
              style={{
                backgroundImage: `url(${avatarURL})`,
              }}
            ></div>
            {this.props.isVoted ? (
              <div className='question-details'>
                <div className='question-author'>
                  <h3>
                    {this.props.isVoted
                      ? `Asked by ${author}`
                      : `${author} asks:`}
                  </h3>
                </div>
                <div className='question-details-results'>
                  <div
                    className={
                      optionOne.votes.includes(authedUser) ? 'your-answer' : ''
                    }
                  >
                    <p>Would you rather {optionOne.text}</p>
                    <div className='question-details-precentage'>
                      <span
                        style={{
                          width: `${
                            optionOnePrecentage > 0
                              ? optionOnePrecentage
                              : '100'
                          }%`,
                          backgroundColor: optionOnePrecentage < 1 && '#d3d3d3',
                        }}
                      >{`${optionOnePrecentage}%`}</span>
                    </div>
                    <span>{`${optionOne.votes.length} out of ${allVotes} votes`}</span>
                  </div>
                  <div
                    className={
                      optionTwo.votes.includes(authedUser) ? 'your-answer' : ''
                    }
                  >
                    <p>Would you rather {optionTwo.text}</p>
                    <div className='question-details-precentage'>
                      <span
                        style={{
                          width: `${
                            optionTwoPrecentage > 0
                              ? optionTwoPrecentage
                              : '100'
                          }%`,
                          backgroundColor: optionTwoPrecentage < 1 && '#d3d3d3',
                        }}
                      >{`${optionTwoPrecentage}%`}</span>
                    </div>
                    <span>{`${optionTwo.votes.length} out of ${allVotes} votes`}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className='question-details'>
                <div className='question-author'>
                  <h3>
                    {this.props.isVoted
                      ? `Asked by ${author}`
                      : `${author} asks:`}
                  </h3>
                </div>
                <h3>Would you rather</h3>
                <form onSubmit={this.handleSubmit}>
                  <div className='question-details-options'>
                    <input
                      type='radio'
                      name='OptionOne'
                      id='one'
                      value='optionOne'
                      onChange={this.handleOption}
                    />
                    <label htmlFor='one'>{optionOne.text}</label>
                    <input
                      type='radio'
                      name='OptionOne'
                      id='two'
                      value='optionTwo'
                      onChange={this.handleOption}
                    />
                    <label htmlFor='two'>{optionTwo.text}</label>
                  </div>
                  <button type='submit' disabled={!this.state.optionValue}>
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, authedUser, users, isLoading }, props) {
  const { qid } = props.match.params;
  const questionDetails = questions[qid];
  return {
    isLoading,
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
