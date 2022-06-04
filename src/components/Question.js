import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends Component {
  render() {
    const { author, authorAvatar, id } = this.props;
    const { optionOne } = this.props.question;
    return (
      <div className='question-container'>
        <div
          className='question-image'
          style={{
            backgroundImage: `url(${authorAvatar})`,
          }}
        ></div>
        <div className='question-details'>
          <div className='question-author'>
            <h3>{author} asks:</h3>
          </div>
          <h3>Would you rather</h3>
          <p>...{optionOne.text}...</p>
          <Link to={`/questions/${id}`}>View Poll</Link>
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
