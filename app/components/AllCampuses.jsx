import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RemoveCampus from './RemoveCampus';
import EditCampus from './EditCampus';

export default class AllCampuses extends Component {
  constructor () {
    super();
    this.state = {
      campuses: []
    };
  }

  componentDidMount () {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => this.setState({ campuses }));
  }

  render () {
    const campuses = this.state.campuses;

    return (
      <div className="container">
        <h2>Margaret Hamilton Interplanetary Academy of JavaScript</h2>
        <div>
          <Link to="/addCampus">
            <button type="button">Add Campus</button>
          </Link>
          <br />
          <br />
          {
            campuses.length && campuses.map(campus => {
              return (
                <div key={ campus.id }>
                  <Link to={ `/campuses/${ campus.id }` }>
                    <div>{campus.name}</div>
                  </Link> 
                  <RemoveCampus campusToDelete={campus.id} />
                  <Link to={`/editCampus/${ campus.id }`} >
                    <button>EDIT CAMPUS</button>
                  </Link>
                  <Link to={ `/campuses/${ campus.id }` }> 
                    <div> <img src={`${campus.image}`} alt="Academy of Javascript Campus" height="450px" width="800px" /></div>
                  </Link>
                  <br />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
