import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div className='info-container'>
        {this.props.fromDetails ? (
          <Fragment>
            <h3>Sorry, this question does not exist.</h3>
            <p>
              Please <Link to='/add'>Add new</Link> and score some points.
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <h3>Sorry, this page was not found.</h3>
            <p>
              You can go to <Link to='/'>Questions Page</Link> to check all the
              polls.
            </p>
          </Fragment>
        )}
      </div>
    );
  }
}

export default NotFound;
