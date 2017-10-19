import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
    return (
      <div className="container">
        <Link to="/">
          <button type="button">Home</button>
        </Link>
        <Link to="/campuses">
          <button type="button">Campuses</button>
        </Link>
        <Link to="/students">
          <button type="button">Students</button>
        </Link>
      </div>
    )
}

export default HomeButton;
