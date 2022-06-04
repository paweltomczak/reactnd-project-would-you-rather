import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import Loading from './Loading';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.value));
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div className='sign-in-containter'>
        {this.props.loading ? (
          <Loading />
        ) : (
          <Fragment>
            <h3>Please Sign In</h3>
            <form onSubmit={this.handleSubmit}>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value=''>Select a user</option>
                {this.props.users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
              <input
                type='submit'
                value='Sign In'
                onSubmit={this.handleSubmit}
                disabled={!this.state.value}
              />
            </form>
          </Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    loading: Object.keys(users).length === 0,
    users: Object.keys(users).map((key) => users[key]),
  };
}

export default connect(mapStateToProps)(SignIn);
