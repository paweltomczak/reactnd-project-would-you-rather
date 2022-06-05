import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render() {
    const { users } = this.props;
    const usersSorted = users.sort((a, b) => b.score - a.score);
    return (
      <div className='leaderboard'>
        <h1>Leader Board</h1>
        {usersSorted.map((user, index) => {
          return (
            <div className='leaderboard-container' key={user.id}>
              <div
                className='leaderboard-user-image'
                style={{
                  backgroundImage: `url(${user.avatar})`,
                }}
              />
              <div className='leaderboard-user-details'>
                <h3>
                  {index + 1}. {user.name}
                </h3>
                <p>
                  Answered questions: <span>{user.answers}</span>
                </p>
                <p>
                  Created questions: <span>{user.questions}</span>
                </p>
              </div>
              <div className='leaderboard-user-score'>
                Score:
                <span>{user.score}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).map((key) => {
      const user = users[key];
      const userAnswers = Object.keys(user.answers).length;
      const userQuestions = user.questions.length;
      const userScore = userAnswers + userQuestions;
      return {
        avatar: user.avatarURL,
        id: user.id,
        name: user.name,
        answers: userAnswers,
        questions: userQuestions,
        score: userScore,
      };
    }),
  };
}

export default connect(mapStateToProps)(Leaderboard);
