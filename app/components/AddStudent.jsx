import React, { Component } from 'react';
import axios from 'axios';
import history from '../history';
import { connect } from 'react-redux';
import { createStudent } from '../reducers/students';
import { withRouter } from 'react-router';

class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      campusId: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => this.setState({ campuses }));
  }

  handleChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (!this.state.selectedCampus) {
      alert('Please select a Campus');
    }

    this.props.addStudent(this.state, this.props.history);
  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div className="container">
        <br />
        <form onSubmit={this.handleSubmit}>
          <div>Add Student</div>
          <br />
          Student Name: <br />
          <input type="text" name="studentName" placeholder="Student Name" onChange={this.handleChange} /><br />
          E-Mail: <br />
          <input type="text" name="studentEmail" placeholder="E-Mail Address" onChange={this.handleChange} /><br />
          Select A Campus: <br />
          <select name="selectedCampus" form="Campuses" onChange={this.handleChange}>
            <option selected="true" disabled="disabled"> Campuses </option>
            {
              campuses.length && campuses.map(campus => (
                <option value={campus.id} key={campus.id}>{ campus.name }</option>
                ))
            }
          </select>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

const mapState = ({ students, campuses }) => ({ students, campuses });
const mapDispatch = { createStudent };
export default withRouter(connect(mapState, mapDispatch)(AddStudent));
