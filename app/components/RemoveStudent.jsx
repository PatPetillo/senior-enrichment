import React, { Component } from 'react';
import axios from 'axios';
// import history from '../history';

export default class RemoveStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentToDelete: props.studentToDelete
    }
    this.removeStudent = this.removeStudent.bind(this)
  }

  removeStudent () {
    const id = this.state.studentToDelete;
    axios.delete(`/api/students/${id}`)
      .then(res => res.data)
  }


  render () {
    return (
      <button onClick={ this.removeStudent }>EXPEL</button>
    )
  }
}
