import React, { Component } from 'react';
import axios from 'axios';

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
      <div>
        <div>
          <br />
          {
            campuses.map(campus => {
              return (
                <div key={campus.id}>
                  <div>{campus.name}</div>
                  <div> <img src={`${campus.image}`} alt="College Campus" height="450px" width="800px" /></div>
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
