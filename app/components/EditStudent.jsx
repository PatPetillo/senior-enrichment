import React, { Component } from 'react';
import axios from 'axios';

export default class EditStudent extends Component {
  constructor () {
    super();
    this.state = {
      campuses: [],
      student: {},
      studentId: '',
      studentName: '',
      studentEmail: '',
      selectedCampus: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    //chained axios.get requests updated with an axios.all below
    // componentDidMount () {
    //   const id = this.props.match.params.studentId
    //   axios.get('/api/campuses')
    //   .then(res => res.data)
    //   .then(campuses => this.setState({ campuses }))
    //   .then(() => {
    //     axios.get(`/api/students/${id}`)
    //     .then(res => res.data)
    //     .then(student => this.setState({ student }))
    //   })
    //   .catch(error => console.error(error))
    // }

  componentDidMount () {
    const id = this.props.match.params.studentId
    axios.all([
      axios.get('/api/campuses'),
      axios.get(`/api/students/${id}`)
    ])
    .then(axios.spread((campuses, student) => {
      this.setState({ campuses: campuses.data, student: student.data })
    }))
  }

  handleChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit (evt) {
    let id = this.state.student.id;
    let studentToEdit = {}

    //If user does not edit the input field do not submit a change to the server.    
    if (this.state.studentName) studentToEdit.name = this.state.studentName;
    if (this.state.studentEmail) studentToEdit.email = this.state.studentEmail;
    if (this.state.selectedCampus) studentToEdit.campusId = this.state.selectedCampus;
    
    axios.put(`/api/students/${id}`, studentToEdit)
      .then(res => res.data)
    evt.preventDefault();
  }

  render () {
    const campuses = this.state.campuses;
    const student = this.state.student;
    return (
      <div className="container">
        <br />
        <form onSubmit={ this.handleSubmit }>
          <div>Edit Student: { student.name } </div>
          <br />
          Student Name: <br />
          <input type="text" name="studentName" placeholder={ `${ student.name }` } onChange={ this.handleChange } /><br />
          E-Mail: <br />
          <input type="text" name="studentEmail" placeholder={ `${ student.email }` } onChange={ this.handleChange } /><br />
          Select A Campus: <br />
          <select name="selectedCampus" form="Campuses" onChange={ this.handleChange }>
            <option selected="true" disabled="disabled"> Campuses </option>
            {
              campuses.length && campuses.map(campus => {
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
