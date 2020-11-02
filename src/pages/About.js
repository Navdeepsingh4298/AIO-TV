import React from 'react';
import welcome2 from './welcome2.jpg';

function About() {
  return (
    <div>
      <h2><strong>About US</strong></h2>
      <p>All Credit goes to original Content Creators and channels. We just make a collage of it.</p>
      <p>This is just a Project for college and for Educational Purpose only.</p>
      <img src={welcome2} alt="welcome" style={{ height: "500px", width: "100%", margin: "0" }} />
    </div>
  )
}

export default About;
