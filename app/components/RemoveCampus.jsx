import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCampus } from '../reducers/campuses';

class RemoveCampus extends Component {
  constructor(props) {
    super(props)

    this.removeCampus = this.removeCampus.bind(this)
  }

  removeCampus () {
    const id = this.props.campusToDelete;
    this.props.removeCampus(id);
  }


  render () {
    return (
      <button onClick={ this.removeCampus }>REMOVE CAMPUS</button>
    )
  }
}

const mapState = state => {
  return {
    state: state
  }
}

const mapDispatch = { removeCampus };

//passing the state and the action to the reducer
export default connect(mapState, mapDispatch)(RemoveCampus);