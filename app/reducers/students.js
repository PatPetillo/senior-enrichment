import axios from 'axios';

//ACTION TYPES

const INITIALIZE = 'INITIALIZE_STUDENTS';
const REMOVE = 'REMOVE_STUDENTS';

//ACTION CREATORS 
const init = students => ({ type: INITIALIZE, students });
const remove = id => ({ type: REMOVE, id })

//REDUCERS
export default function reducer(students = [], action) {
  switch (action.type) {

    case INITIALIZE:
      return action.students;

    case REMOVE:
      return students.filter(student => student.id !== action.id);

    default:
      return students;

  }
}
//THUNK CREATORS
export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Fetching students unsuccessful', err))
}

export const removeStudent = (id) => dispatch => {
    axios.delete(`/api/campuses/${id}`)
      .then(res => res.data)
      .then(dispatch(remove(id)))
      .catch(err => console.error('Deleting students failed', err))
}

