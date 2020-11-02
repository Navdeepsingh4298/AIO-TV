import React from 'react';
import Religiouslinks from '../links/Religiouslinks';
import Card from '../components/Card';
import './links.css';


function Religious() {
  return (
    <div>
      <h2>Religious Channels</h2>
      <div className="links-container">
        {Religiouslinks.map(link => {
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

export default Religious;
