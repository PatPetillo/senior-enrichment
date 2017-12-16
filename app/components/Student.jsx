import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Student = (props) => {
  const students = props.state.students;
  const id = Number(props.match.params.studentId);
  const student = students.filter((studentById) => {
    return studentById.id === id
  })

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
              <tr key={student.length && student[0].id}>
                <td>{ student.length && student[0].id }</td>
                <td>{ student.length && student[0].name }</td>
                <td>{ student.length && student[0].campus.name }</td>
                <td>
                  <Link to={`/editStudent/${ student[0].id }`}>
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

const mapDispatch = {};

export default connect(mapState, mapDispatch)(Student);
