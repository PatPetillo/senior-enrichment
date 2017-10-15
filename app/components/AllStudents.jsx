import React, { Component } from 'react';
import axios from 'axios';

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
          {
            <table>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Campus</th>
              </tr>
              {
                students.map(student => {
                  return (
                    <tr key={student.id}>
                      <td>{ student.id }</td>
                      <td>{ student.name }</td>
                      <td>{ student.campusId }</td>
                    </tr>
                  );
                })
              }
            </table> 
          }
      </div>
    );
  }
}
