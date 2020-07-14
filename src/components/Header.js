import React from 'react';
import './css/Header.css';

const Header = () => {
  return (
    <header className="perfil">
      <i className="perfil__image fas fa-user-circle"></i>
      <div className="perfil__content">
        <h1>Header-tittle</h1>
        <p>Header-job-title</p>
        <div>
          <p>Header-phone</p>
          <p>Header-email</p>
          <p>Header-website</p>
        </div>
        <p>Header-adress</p>
      </div>
    </header>
  );
};

export default Header;