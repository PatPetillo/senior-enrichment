import React from 'react';
import { Link } from 'react-router-dom';
import RemoveCampus from './RemoveCampus';
import { connect } from 'react-redux';

const AllCampuses = (props) => {
    const campuses = props.state.campuses;

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
                    <div>{ campus.name }</div>
                  </Link> 
                  <RemoveCampus campusToDelete={campus.id} />
                  <Link to={`/editCampus/${ campus.id }`} >
                    <button>EDIT CAMPUS</button>
                  </Link>
                  <Link to={ `/campuses/${ campus.id }` }> 
                    <div> <img src={`${ campus.image }`} alt="Academy of Javascript Campus" height="450px" width="800px" /></div>
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

const mapState = state => {
  return {
    state: state
  }
}

export default connect(mapState, null)(AllCampuses);
