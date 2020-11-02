import React from 'react';
import Cartoonlinks from '../links/Cartoonlinks';
import Card from '../components/Card';
import './links.css';

function Cartoons() {
  return (
    <div>
      <h2>Cartoon Channels</h2>
      <div className="links-container">
        {Cartoonlinks.map(link => {
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

export default Cartoons
