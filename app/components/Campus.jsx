import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Campus extends Component {
  constructor () {
    super();
    this.state = {
      campus: {},
      students: []
    };
  }

  componentDidMount () {
    const id = this.props.match.params.campusId
    axios.get(`/api/campuses/${id}`)
      .then(res => res.data)
      .then(campus => {
        this.setState({ campus: campus })
        this.setState({ students: campus.students })
      });
  }

  render () {
    const campus = this.state.campus;
    const students = this.state.students;
    return (
      <div className="container">
        <h2>Margaret Hamilton Interplanetary Academy of JavaScript</h2>
        <div><img src={`../${ campus.image }` } alt="Academy of Javascript Campus" height="350px" width="600px" /></div>
        <div>
            <div key={ campus.id }>
              <h3>{ campus.name }</h3>
              <Link to={`/editCampus/${ campus.id }`} >
                <button>EDIT CAMPUS</button>
              </Link>
              <h4>List of Students at { `${ campus.name }`  }:</h4>
              <table>
                <tbody>
                  <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                  </tr>
                  {
                  students.map(student => {
                    return (
                        <tr key={student.id}>
                          <td>{ student.id }</td>
                          <td>
                          <Link to={ `/students/${ student.id }` }>
                            { student.name }
                          </Link>
                          </td>
                          <td>{ student.email }</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
        </div>
      </div>
    )
  }
}
