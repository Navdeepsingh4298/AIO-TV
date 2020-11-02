import React from 'react';
import { Button } from 'react-bootstrap';
import './noMatch.css';

function NoMatch() {
  return (
    <div>
      <div className="noMatch-container">
        <h1>Page Not Found!!!</h1>
        <h3>Try Again Later....<br /> </h3>
        <Button size="lg" variant="outline-light" href='/' >Go to Home Page</Button>
      </div>
    </div>
  )
}

export default NoMatch;
