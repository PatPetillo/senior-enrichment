import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RemoveStudent from './RemoveStudent';


export default class AllCampuses extends Component {
  constructor () {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount () {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => this.setState({ students }));
  }

  render () {
    const students = this.state.students;
    return (
      <div>
        <br />
        <Link to="/addStudent">
          <button type="button">Add Student</button>
        </Link>
        <br />
          {
            <table>
              <tbody>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Campus</th>
                  <th>EXPEL</th>
                  <th>EDIT</th>
                </tr>
                {
                  students.map(student => {
                    return (
                      <tr key={student.id}>
                        <td>{ student.id }</td>
                        <td>{ student.name }</td>
                        <td>{ student.campus.name }</td>
                        <td><RemoveStudent studentToDelete={student.id} /></td>
                        <td>
                          <Link to={`/editStudent/${ student.id }`} >
                            <button>EDIT</button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          }
      </div>
    );
  }
}
