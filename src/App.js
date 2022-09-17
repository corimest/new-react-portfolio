import React, { useState } from 'react';
import './App.css';
import About from './components/About'; 
import Nav from './components/Nav'; 
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact'; 

function App() {

  const [contactSelected, setContactSelected] = useState(false);  


  const [categories] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Contact' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
