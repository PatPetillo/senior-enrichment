import axios from 'axios';
// import history from '../history';

// ACTION TYPES

const INITIALIZE = 'INITIALIZE_STUDENTS';
const CREATE = 'CREATE_STUDENT';
const REMOVE = 'REMOVE_STUDENTS';
const UPDATE = 'UPDATE_STUDENT';
const ON_CAMPUS_REMOVE = 'ON_CAMPUS_REMOVE';

// ACTION CREATORS
const init = students => ({ type: INITIALIZE, students });
const create = student => ({ type: CREATE, student });
const remove = id => ({ type: REMOVE, id });
const update = student => ({ type: UPDATE, student });
const campusRemove = students => ({ type: ON_CAMPUS_REMOVE, students });

// REDUCERS
export default function reducer(students = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.students;

    case CREATE:
      return [...students, action.student];

    case REMOVE:
      return students.filter(student => student.id !== action.id);

    case UPDATE:
      return students.filter(student => (student.id !== action.student.id)).concat(action.student);

    case ON_CAMPUS_REMOVE:
      return students.filter(student => student.campusID !== action.id);

    default:
      return students;
  }
}

// THUNK CREATORS
export const fetchStudents = () => (dispatch) => {
  axios.get('/api/students')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Fetching students unsuccessful', err));
};

export const removeStudent = id => (dispatch) => {
  axios.delete(`/api/students/${id}`)
    .then(res => res.data)
    .then(dispatch(remove(id)))
    .catch(err => console.error('Deleting students failed', err));
};

export const addStudent = (student, history) => (dispatch) => {
  axios.post('api/students', student)
    .then(res => res.data)
    .then(studentToAdd => dispatch(create(studentToAdd)))
    .then(() => history.push('/students'))
    .catch(err => console.error('Creating student failed', err));
};

export const updateStudent = (student, updatedStudent, history) => (dispatch) => {
  axios.put(`/api/students/${student.id}`, updatedStudent)
    .then(res => res.data)
    .then(student => dispatch(update(student)))
    .then(() => history.push('/students'))
    .catch(err => console.error('Updating student failed', err));
};

