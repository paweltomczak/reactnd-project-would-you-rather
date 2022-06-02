import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionDetails extends Component {
  render() {
    return (
      <div>
        <h1>Question Details</h1>
      </div>
    );
  }
}

function mapStateToProps({ questions }, props) {
  console.log(props);
  return {
    questions,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
