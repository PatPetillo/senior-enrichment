import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeStudent } from '../reducers/students'
// import history from '../history';

class RemoveStudent extends Component {
  constructor(props) {
    super(props)
    this.removeSingleStudent = this.removeSingleStudent.bind(this)
  }

  removeSingleStudent () {
    const id = this.props.studentToDelete;
    this.props.removeStudent(id);
  }

  render () {
    return (
      <button onClick={ this.removeSingleStudent }>EXPEL</button>
    )
  }
}

const mapState = state => {
  return {
    state: state
  }
}

const mapDispatch = { removeStudent };

//passing the state and the action to the reducer
export default connect(mapState, mapDispatch)(RemoveStudent);

