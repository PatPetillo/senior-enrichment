import React, { Component } from 'react';
import axios from 'axios';

export default class RemoveCampus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campusToDelete: props.campusToDelete
    }
    this.removeCampus = this.removeCampus.bind(this)
  }

  removeCampus () {
    const id = this.state.campusToDelete;
    axios.delete(`/api/campuses/${id}`)
      .then(res => res.data)
  }


  render () {
    return (
      <button onClick={ this.removeCampus }>REMOVE CAMPUS</button>
    )
  }
}
