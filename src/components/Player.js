import React from 'react';
import ReactPlayer from 'react-player';
import "./player.css";

function Player(props) {
  return (
    <div className="player">
      <div>
        <ReactPlayer url={props.source} playing controls loop playIcon />
      </div>
      <div className="player-heading"> <h2>{props.title}</h2></div>

    </div>
  )
}

export default Player;
