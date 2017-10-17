import React, { Component } from 'react';
import axios from 'axios';

export default class RemoveStudent extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      studentToDelete: props.studentToDelete
    }
    this.removeStudent = this.removeStudent.bind(this)
  }

  removeStudent () {
    const id = this.state.studentToDelete;
    console.log(id)
    axios.delete(`/api/students/${id}`)
      .then(res => res.data)
  }

  render (){
    return (
      <button onClick={this.removeStudent}>X</button>
    )
  }
}
