 import React from 'react';
import './Nav.css';



function Nav() {
  

  return (
    <div className="nav">
        <img className='nav__logo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix Logo' />

        <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        className="nav__avatar"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;