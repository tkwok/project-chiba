import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    const { email } = this.props.user;
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">App Logo</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavDropdown eventKey={1} title={ email || 'None' } id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>Account Settings</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={1.2}
                onClick={() => this.signOut()}>Sign Out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <h3>Goal Coach</h3>
        <AddGoal /><hr/>
        <h4>Goals</h4>
        <GoalList /><hr/>
        <h4>Complete Goals</h4>
        <CompleteGoalList />
      </div>
    );
  }
};

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps, null)(App);
