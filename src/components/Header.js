import React from 'react';

const Header = () => {
  return (
    <header className="perfil">
      <div className="perfil__image">
        <i className="fas fa-user-circle"></i>
      </div>
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