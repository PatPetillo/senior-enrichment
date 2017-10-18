import React, { Component } from 'react';
import axios from 'axios';

export default class AddCampus extends Component {
  constructor () {
    super();
    this.state = {
      campusName: '',
      campusImage: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit (evt) {
    axios.post('/api/campuses', { name: this.state.campusName, image: this.state.campusImage })
      .then(res => res.data)
    evt.preventDefault();
  }

  render () {
    const campuses = this.state.campuses;
    return (
      <div>
        <br />
        <form onSubmit={ this.handleSubmit }>
          <div> Add Campus </div>
          <br />
          Campus Name: <br />
          <input type="text" name="campusName" placeholder="Campus Name" onChange={ this.handleChange } /><br />
          Image (Provide an image URL): <br />
          <input type="text" name="campusImage" placeholder="Provide Image URL" onChange={ this.handleChange } /><br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
