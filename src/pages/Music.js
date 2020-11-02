import React from 'react';
import Card from '../components/Card';
import './links.css';
import Musiclinks from '../links/Musiclinks';

function Music() {
  return (
    <div>
      <h2>Music Channels</h2>
      <div className="links-container">
        {Musiclinks.map(newslink => {
          return <Card
            key={newslink.id}
            img={newslink.img}
            source={newslink.source}
            title={newslink.title}
          />
        })}
      </div>
    </div>
  )
}

export default Music;
