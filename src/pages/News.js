import React from 'react';
import Card from '../components/Card';
import './links.css';
import Newslinks from '../links/Newslinks';

function News() {
  return (
    <div>
      <h2>News Channels</h2>
      <div className="links-container">
        {Newslinks.map(newslink => {
          return <Card
            key={newslink.id}
            img={newslink.img}
            source={newslink.source}
            title={newslink.title}
          />
        })}
      </div>
    </div >
  )
}

export default News;
