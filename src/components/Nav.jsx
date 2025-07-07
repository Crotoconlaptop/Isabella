import React from 'react';

const Nav = ({ sections, selected, setSelected }) => (
  <nav className="nav">
    {sections.map((sec) => (
      <button
        key={sec.id}
        className={selected === sec.id ? 'active' : ''}
        onClick={() => setSelected(sec.id)}
      >
        {sec.title}
      </button>
    ))}
  </nav>
);

export default Nav;
