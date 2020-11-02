import React from 'react';
import Serieslinks from '../links/Serieslinks';
import Card from '../components/Card';
import './links.css';

function Series() {
  return (
    <div>
      <h2>Web Series</h2>
      <div className="links-container">
        {Serieslinks.map(link => {
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

export default Series;
