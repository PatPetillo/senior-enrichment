import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
    return (
      <div>
        <Link to="/">
          <button type="button">Home</button>
        </Link>
        <Link to="/students">
          <button type="button">Students</button>
        </Link>
      </div>
    )
}

export default HomeButton;
