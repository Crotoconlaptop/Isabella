import React from 'react';

const MenuSection = ({ title, items }) => (
  <section className="menu-section">
    <h2>{title}</h2>
    <div>
      {items && items.length > 0 ? (
        items.map((item, i) => (
          <div className="menu-item" key={i}>
            <span className="menu-item-name">{item.nombre}</span>
            {item.descripcion && (
              <span className="menu-item-desc"> — {item.descripcion}</span>
            )}
            <span className="menu-item-price">
              {item.precio ? `$${item.precio}` : ''}
            </span>
          </div>
        ))
      ) : (
        <p>Pronto actualizaremos esta sección.</p>
      )}
    </div>
  </section>
);

export default MenuSection;
