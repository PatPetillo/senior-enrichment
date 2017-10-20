import axios from 'axios';

//ACTION TYPES

const INITIALIZE = 'INITIALIZE_CAMPUSES';

//ACTION CREATORS 
const init = campuses => ({ type: INITIALIZE, campuses });

//REDUCERS
export default function reducer(campuses = [], action) {
  switch (action.type) {

    case INITIALIZE:
      return action.campuses;

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
