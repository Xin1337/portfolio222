import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <p>RM_DEVELOPERS</p>
      </div>
      <div className="socials">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;