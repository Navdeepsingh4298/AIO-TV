import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div>
      <div className="card">
        <Link to={{
          pathname: '/play',
          aboutProps: {
            source: props.source,
            title: props.title
          }
        }}>
          <a href={props.source}>
            <img src={props.img} alt="channel-img" />
            <h3>{props.title}</h3>
          </a>
        </Link>
      </div>
    </div >
  )
}

export default Card;
