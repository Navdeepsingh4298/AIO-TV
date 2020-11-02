import React from 'react';
import Movieslinks from '../links/Movieslinks';
import Card from '../components/Card';
import './links.css';

function Movies() {
  return (
    <div>
      <h2>Movies</h2>
      <div className="links-container">
        {Movieslinks.map(link => {
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

export default Movies;
