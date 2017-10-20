import React from 'react';
import { Link } from 'react-router-dom';
import RemoveStudent from './RemoveStudent';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const AllStudents = (props) => {
    const students = props.state.students;

    return (
      <div className="container">
        <br />
        <Link to="/addStudent">
          <button type="button">Add Student</button>
        </Link>
        <br />
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
                      <tr key={ student.id }>
                        <td>{ student.id }</td>
                        <td>
                          <Link to={ `/students/${ student.id }` }>
                            { student.name }
                          </Link>
                        </td>
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

const mapState = state => {
  return {
    state: state
  }
}

export default withRouter(connect(mapState, null)(AllStudents));
