import React, { Component } from 'react';
import axios from 'axios';
import history from '../history';
import { connect } from 'react-redux';
import { updateStudent } from '../reducers/students';
import { withRouter } from 'react-router';

class EditStudent extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      campusId: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    // let id = this.state.student.id;
    // let studentToEdit = {}
    // //If user does not edit the input field do not submit a change to the server.    
    // if (this.state.studentName) studentToEdit.name = this.state.studentName;
    // if (this.state.studentEmail) studentToEdit.email = this.state.studentEmail;
    // if (this.state.selectedCampus) studentToEdit.campusId = this.state.selectedCampus;
    const id = Number(this.props.match.params.studentId)
    const studentToUpdate = this.props.students.filter(student => {
      return student.id == id;
    })[0]

    this.props.updateStudent(studentToUpdate, this.state, this.props.history);
  }

  render () {
    const campuses = this.props.campuses;
    const id = Number(this.props.match.params.studentId)
    const studentToUpdate = this.props.students.filter(student => {
      return student.id == id;
    })[0]
    
    return (
      <div className="container">
        <br />
        <form onSubmit={ this.handleSubmit }>
          <div>Edit Student: { studentToUpdate.name } </div>
          <br />
          Student Name: <br />
          <input type="text" name="name" placeholder={ `${ studentToUpdate.name }` } onChange={ this.handleChange } /><br />
          E-Mail: <br />
          <input type="text" name="email" placeholder={ `${ studentToUpdate.email }` } onChange={ this.handleChange } /><br />
          Select A Campus: <br />
          <select name="campusId" form="Campuses" onChange={ this.handleChange }>
            <option selected="true" disabled="disabled"> Campuses </option>
            {
              this.props.campuses.map(campus => {
                return (
                  <option value={ campus.id } key={ campus.id }>{ campus.name }</option>
                );
              })
            }
          </select>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

// export default withRouter(EditStudent);
const mapState = ({ students, campuses }) => ({ students, campuses });
const mapDispatch = { updateStudent };
export default withRouter(connect(mapState, mapDispatch)(EditStudent));