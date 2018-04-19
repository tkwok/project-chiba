import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal() {
    // add to omplet Goals
    // remove goal from
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email, title});
  }
  render() {
    const { email, title } = this.props.goal;
    const { email: userEmail } = this.props.user;

    if (userEmail === email ) {
    return (
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
          >
          Complete
        </button>
      </div>
    )} else return null;
  }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
      user
    }
}

export default connect(mapStateToProps, null)(GoalItem);
