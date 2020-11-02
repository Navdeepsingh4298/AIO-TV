import React from 'react';
import './footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-content">
        <p>
          This site is Build and Maintained by <a className="about-link" href="https://github.com/navdeepsingh4298" target="_blank">Navdeep Singh</a><br />
          © Copyright {year} Made in India.
      </p>
        <a className="about-link" href={process.env.REACT_APP_PUBLIC_URL + "/about"} >About US</a>
      </div>
    </div>
  )
}

export default Footer;
