import React, { Component } from 'react';
import axios from 'axios';

export default class AddStudent extends Component {
  constructor () {
    super();
    this.state = {
      campuses: [],
      studentName: '',
      studentEmail: '',
      selectedCampus: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => this.setState({ campuses }));
  }

  handleChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit (evt) {
    axios.post('/api/students', { name: this.state.studentName, email: this.state.studentEmail, campusId: this.state.selectedCampus })
      .then(res => res.data)
    evt.preventDefault();
  }

  render () {
    const campuses = this.state.campuses;
    return (
      <div>
        <br />
        <form onSubmit={ this.handleSubmit }>
        {/* <input type="hidden" name="redirect" value="/students" /> */}
          Add Student <br />
          <br />
          Student Name: <br />
          <input type="text" name="studentName" placeholder="Student Name" onChange={ this.handleChange } /><br />
          E-Mail: <br />
          <input type="text" name="studentEmail" placeholder="E-Mail Address" onChange={ this.handleChange } /><br />
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
