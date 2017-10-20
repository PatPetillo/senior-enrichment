import axios from 'axios';

//ACTION TYPES

const INITIALIZE = 'INITIALIZE_CAMPUSES';
const REMOVE = 'REMOVE_CAMPUS'

//ACTION CREATORS 
const init = campuses => ({ type: INITIALIZE, campuses });
const remove = id => ({ type: REMOVE, id })

//REDUCERS
export default function reducer(campuses = [], action) {
  switch (action.type) {

    case INITIALIZE:
      return action.campuses;

    case REMOVE:
      return campuses.filter(campus => campus.id !== action.id);

    default:
      return campuses;

  }
}
//THUNK CREATORS
export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Fetching campuses unsuccessful', err))
}

export const removeCampus = (id) => dispatch => {
    axios.delete(`/api/campuses/${id}`)
      .then(res => res.data)
      .then(dispatch(remove(id)))
      .catch(err => console.error('Deleting students failed', err))
}