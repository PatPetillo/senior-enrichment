import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import AllStudents from './AllStudents';
import Student from './Student';
import AddStudent from './AddStudent';
import AllCampuses from './AllCampuses';
import Campus from './Campus';
import HomeButton from './HomeButton';
import EditStudent from './EditStudent';
import Root from './Root';
import Home from './Home';
import AddCampus from './AddCampus';
import EditCampus from './EditCampus';
import { fetchStudents } from '../reducers/students';
import { fetchCampuses } from '../reducers/campuses';
import store from '../store'

class App extends Component {

  componentDidMount () {
    store.dispatch(fetchStudents());
    store.dispatch(fetchCampuses());
  }

  render () {
    return (
      <div>
        <Router>
          <div>
            <div>
              <HomeButton />
            </div>
            <Switch>
              {/* <Route exact path="/" render={ (routeProps) => <AllCampuses routeProps={ routeProps } />} /> */}
              <Route exact path="/" component={ Home } />
              <Route exact path="/campuses" component={ AllCampuses } />
              <Route exact path="/campuses/" component={ AllCampuses } />
              <Route exact path="/campuses/:campusId" component={ Campus } />
              <Route exact path="/editCampus/:campusId" component={ EditCampus } />
              <Route exact path="/addCampus" component={ AddCampus } />
              <Route exact path="/students" component={ AllStudents } />
              <Route exact path="/students/:studentId" component={ Student } />
              <Route exact path="/addStudent" component={ AddStudent } />
              <Route exact path="/editStudent/:studentId" component={ EditStudent } />
              <Route component={ Root } />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

// const mapProps = null;

// const mapDispatch = dispatch => ({
//   fetchInitialData: () => {
//     dispatch(fetchStudents());
//     // what other data might we want to fetch on app load?
//   }
// });

export default App;
