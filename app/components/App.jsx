import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import AllStudents from './AllStudents'
import Student from './Student'
import AddStudent from './AddStudent'
import AllCampuses from './AllCampuses'
import Campus from './Campus'
import HomeButton from './HomeButton'
import EditStudent from './EditStudent'
import Root from './Root'

const App = () => {
    return (
      <div>
        <Router>
          <div>
            <div>
              <HomeButton />
            </div>
            <Switch>
              <Route exact path="/" component={ AllCampuses } />
              <Route path="/campus/:campusId" component={ Campus } />
              <Route exact path="/students" component={ AllStudents } />
              <Route exact path="/students/:studentId" component={ Student } />
              <Route path="/addStudent" component={ AddStudent } />
              <Route path="/editStudent/:studentId" component={ EditStudent } />
              <Route component={ Root } />
            </Switch>
          </div>
        </Router>
      </div>
    )
}

export default App;
