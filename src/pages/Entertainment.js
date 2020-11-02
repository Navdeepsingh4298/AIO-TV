import React from 'react';
import Entertainmentlinks from '../links/Entertainmentlinks';
import Card from '../components/Card';
import './links.css';

function Entertainment() {
  return (
    <div>
      <h2>Entertainment Channels</h2>
      <div className="links-container">
        {Entertainmentlinks.map(link => {
          return <Card
            key={link.id}
            img={link.img}
            source={link.source}
            title={link.title}
          />
        })}
      </div>
    </div>
  )
}

export default Entertainment
