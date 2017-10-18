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
import Home from './Home'
import AddCampus from './AddCampus'

const App = () => {
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
              <Route exact path="/campuses/:campusId" component={ Campus } />
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

export default App;
