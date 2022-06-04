import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/shared';

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOne: '',
      optionTwo: '',
    };
  }
  handleOptionOne = (e) => {
    const optionOne = e.target.value;
    this.setState({ optionOne });
  };
  handleOptionTwo = (e) => {
    const optionTwo = e.target.value;
    this.setState({ optionTwo });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { authedUser, dispatch } = this.props;
    dispatch(handleSaveQuestion(optionOne, optionTwo, authedUser));
    this.props.history.push('/');
  };
  render() {
    return (
      <div className='question-container-new'>
        <h3>Create New Question</h3>
        <div className='question-details-new'>
          <h4>Would you rather</h4>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type='text'
                name='optionOne'
                value={this.state.optionOne}
                onChange={this.handleOptionOne}
                placeholder='Enter Option One here...'
                autoComplete='off'
              />
            </label>
            <span>OR</span>
            <label>
              <input
                type='text'
                name='optionTwo'
                value={this.state.optionTwo}
                onChange={this.handleOptionTwo}
                placeholder='Enter Option Two here...'
                autoComplete='off'
              />
            </label>
            <button
              type='submit'
              disabled={!this.state.optionOne || !this.state.optionTwo}
            >
              Submit
            </button>
          </form>
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

export default connect(mapStateToProps)(AddQuestion);
