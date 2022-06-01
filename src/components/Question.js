import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
  render() {
    const { author, authorAvatar } = this.props;
    const { optionOne } = this.props.question;
    return (
      <div className='question-container'>
        <div className='question-author'>
          <h3>{author} asks:</h3>
        </div>
        <div
          className='question-image'
          style={{
            backgroundImage: `url(${authorAvatar})`,
          }}
        ></div>
        <div className='question-details'>
          <h3>Would you rather</h3>
          <p>...{optionOne.text}...</p>
          <button>View Poll</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  return {
    author: users[question.author].name,
    authorAvatar: users[question.author].avatarURL,
    question,
  };
}

export default connect(mapStateToProps)(Question);
