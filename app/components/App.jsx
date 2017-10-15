import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import AllStudents from './AllStudents'
import Student from './Student'
import AddStudent from './AddStudent'
import AllCampuses from './AllCampuses'
import Campus from './Campus'
import HomeButton from './HomeButton'

const App = () => {
    return (
      <div>
        <Router>
          <div>
            <div>
              <HomeButton />
            </div>
            <Route exact path="/add_student" component={ AddStudent } />
            <Route exact path="/campus/:campusId" component={ Campus } />
            <Route exact path="/students/:studentId" component={ Student } />
            <Route exact path="/students" component={ AllStudents } />
            <Route exact path="/" component={ AllCampuses } />
          </div>
        </Router>
      </div>
    )
}

export default App;
