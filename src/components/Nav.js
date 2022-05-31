import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
  render() {
    const { loggedInUser } = this.props;
    return (
      <header className='header'>
        <div className='logo'>Would you rather?</div>
        <div className='nav'>
          <a href='/'>Home</a>
          <a href='/'>New Question</a>
          <a href='/'>Leader Board</a>
        </div>
        <div className='user-nav'>
          {loggedInUser && (
            <>
              <span>Hi {loggedInUser.name}</span>
              <div
                className='user-nav-thumb'
                style={{
                  backgroundImage: `url(${loggedInUser.avatarURL})`,
                }}
              />
              <a href='/'>Logout</a>
            </>
          )}
        </div>
      </header>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    loggedInUser: authedUser ? users[authedUser] : null,
  };
}

export default connect(mapStateToProps)(Nav);
