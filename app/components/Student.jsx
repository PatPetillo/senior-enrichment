import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Student = (props) => {
  const students = props.state.students;
  const id = Number(props.match.params.studentId);
  const student = students.filter((studentById) => {
    return studentById.id === id
  })[0];
  const campus = student.campus;

  return (
    <div className="container">
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

const mapState = state => {
  return {
    state: state
  }
}

export default connect(mapState, null)(Student);
