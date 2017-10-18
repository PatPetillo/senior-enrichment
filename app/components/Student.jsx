import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Student extends Component {
  constructor () {
    super();
    this.state = {
      student: {},
      campus: {}
    };
  }

  componentDidMount () {
    const id = this.props.match.params.studentId
    axios.get(`/api/students/${id}`)
      .then(res => res.data)
      .then(student => { 
        this.setState({ student: student })
        this.setState({ campus: student.campus })
      })
  }

  render () {
    const student = this.state.student;
    const campus = this.state.campus;
    return (
      <div>
        <br />
          <table>
            <tbody>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Campus</th>
                  <th>EDIT</th>
                </tr>
                <tr key={student.id}>
                  <td>{ student.id }</td>
                  <td>{ student.name }</td>
                  <td>{ campus.name }</td>
                  <td>
                    <Link to={`/editStudent/${ student.id }`}>
                      <button>EDIT</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
    );
  }
}
