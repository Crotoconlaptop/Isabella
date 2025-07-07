import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import { menu, sections } from './data/menu';

function App() {
  const [selected, setSelected] = useState(sections[0].id);

  return (
    <div>
      <Header />
      <Nav sections={sections} selected={selected} setSelected={setSelected} />
      <main>
        <MenuSection
          title={sections.find(sec => sec.id === selected).title}
          items={menu[selected]}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
