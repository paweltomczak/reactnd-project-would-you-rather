import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    const { loggedInUser } = this.props;
    return (
      <header className='header'>
        <div className='logo'>Would you rather?</div>
        <div className='nav'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive && loggedInUser ? 'nav-active' : ''
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/add'
            className={({ isActive }) =>
              isActive && loggedInUser ? 'nav-active' : ''
            }
          >
            New Question
          </NavLink>
          <NavLink
            to='/leaderboard'
            className={({ isActive }) =>
              isActive && loggedInUser ? 'nav-active' : ''
            }
          >
            Leader Board
          </NavLink>
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
