import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <header className='header'>
          <div className='logo'>Would you rather?</div>
          <div className='nav'>
            <a href='/'>Home</a>
            <a href='/'>New Question</a>
            <a href='/'>Leader Board</a>
          </div>
          <div className='user-nav'>
            <span>Hi Pawel</span>
            <div className='user-nav-thumb' style={{
              backgroundImage: `url(https://gravatar.com/avatar/5a540c920e55bfd270afcc6b5e1a07aa?s=400&d=robohash&r=x)`
            }} />
            <a href='/'>Logout</a>
          </div>
        </header>
        <div className='content'>
          <div className='sign-in-containter'>
            <form onSubmit={this.handleSubmit}>
              <select onChange={this.handleChange}>
                <option value=''>Select a user</option>
                <option value='1'>User 1</option>
                <option>User 2</option>
                <option>User 3</option>
              </select>
              <input type='submit' value='Sign In' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
