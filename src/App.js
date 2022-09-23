import React, { useState } from 'react';
import './App.css';
import About from './components/About'; 
import Nav from './components/Nav'; 
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import Resume from './components/Resume';

function App() {

  const [contactSelected, setContactSelected] = useState(false);  


  const [categories] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Resume' }, 
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
            <About></About>
            <Resume></Resume>
            <Portfolio currentCategory={currentCategory}></Portfolio>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
