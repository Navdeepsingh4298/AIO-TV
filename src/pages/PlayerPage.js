import React from 'react';
import Player from '../components/Player';

function PlayerPage(props) {
  return (
    <div>
      <Player
        source={props.location.aboutProps.source}
        title={props.location.aboutProps.title}
      />
    </div>
  )
}

export default PlayerPage;
