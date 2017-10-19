import React, { Component } from 'react';
import axios from 'axios';

export default class EditCampus extends Component {
  constructor () {
    super();
    this.state = {
      student: {},
      campus: {},
      campusId: '',
      campusName: '',
      campusImage: '',
      studentName: '',
      studentEmail: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleCampusSubmit = this.handleCampusSubmit.bind(this);
    this.handleStudentSubmit = this.handleStudentSubmit.bind(this);
  }

  componentDidMount () {
    const id = this.props.match.params.campusId
    axios.get(`/api/campuses/${id}`)
      .then(res => res.data)
      .then(campus => this.setState({ campus: campus }));
  }

  handleChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({
      [name]: value
    });
  }

  handleCampusSubmit (evt) {
    let id = this.state.campus.id;
    let campusToEdit = {};

    //If user does not edit the input field do not submit a change to the server.
    if (this.state.campusName) campusToEdit.name = this.state.campusName;
    if (this.state.campusImage) campusToEdit.image = this.state.campusImage;

    axios.put(`/api/campuses/${id}`, campusToEdit)
      .then(res => res.data)
    evt.preventDefault();
  }

  handleStudentSubmit (evt) {
    axios.post('/api/students', { name: this.state.studentName, email: this.state.studentEmail, campusId: this.state.campus.id })
    .then(res => res.data)
    evt.preventDefault();
  }

  render () {
    const campus = this.state.campus;
    return (
      <div className="container">
        <h2>Margaret Hamilton Interplanetary Academy of JavaScript</h2>
        <h3>{ campus.name }</h3>
        <div><img src={`../${ campus.image }` } alt="Academy of Javascript Campus" height="350px" width="600px" /></div>
        <br />
        <form onSubmit={ this.handleCampusSubmit }>
          <div>Edit Campus: { campus.name } </div>
          <br />
          Campus Name: <br />
          <input type="text" name="campusName" placeholder={ `${ campus.name }` } onChange={ this.handleChange } /><br />
          Campus Image: <br />
          <input type="text" name="campusImage" placeholder={ `${ campus.image }` } onChange={ this.handleChange } /><br />
          <br />
          <input type="submit" value="submit" />
        </form>
        <br />
        <form onSubmit={ this.handleStudentSubmit }>
          <div>Add Student To: { `${ campus.name }` }</div>
          <br />
          Student Name: <br />
          <input type="text" name="studentName" placeholder="Student Name" onChange={ this.handleChange } /><br />
          E-Mail: <br />
          <input type="text" name="studentEmail" placeholder="E-Mail Address" onChange={ this.handleChange } /><br />
          <input type="submit" value="submit" />
        </form>
        <br />
      </div>
    );
  }
}
