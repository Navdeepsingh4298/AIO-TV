import React from 'react';
import welcomeVideo from './Welcome.mp4';

function Welcome() {
  return (
    <div style={{ minHeight: "100%" }}>
      <video src={welcomeVideo} muted autoPlay loop
        height="500px" minWidth="100%" >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Welcome;
