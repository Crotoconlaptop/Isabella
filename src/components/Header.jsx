// /src/components/Header.jsx

import React from 'react';

const Header = () => (
  <header className="header">
    <div className="logo">Isabella</div>
    <div className="slogan">
      Resto-Bar <br />
      <span style={{ fontWeight: '400', fontSize: '1rem' }}>Echesortu, Rosario</span>
    </div>
    <div className="bienvenida">
      Bienvenido a Isabella, tu punto de encuentro.<br />
      Descubrí nuestra carta, promociones y sabores caseros.
    </div>
  </header>
);

export default Header;
