import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div>
      <strong>Dirección:</strong> Constitución 1220, Rosario, Santa Fe<br />
      <strong>WhatsApp:</strong> <a href="https://wa.me/3418115000" target="_blank" rel="noopener noreferrer">+54 9 341 811-5000</a><br />
      <strong>Instagram:</strong> <a href="https://instagram.com/isabellarestobar" target="_blank" rel="noopener noreferrer">@isabellarestobar</a>
    </div>
    <div className="footer-copy">© Isabella Resto Bar {new Date().getFullYear()}</div>
  </footer>
);

export default Footer;
