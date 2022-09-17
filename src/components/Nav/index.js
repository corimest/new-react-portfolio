import React from 'react'; 

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
      } = props;

    return(
        <header>
            <nav>
                <ul className="flex-row">
                    <li className='nav-items'>
                        <span>Corinne Mestemacher</span>
                    </li>
                    <li className='nav-items'>
                        <a data-testid='about' href="#about" onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li className='nav-items'>
                        <a data-testid='portfolio' href="#portfolio" onClick={() => setContactSelected(false)}>
                            Portfolio
                        </a>
                    </li>
                    <li className='nav-items'>
                        <a data-testid='portfolio' href="#resume" onClick={() => setContactSelected(false)}>
                            Resume
                        </a>
                    </li>
                    <li className='nav-items'>
                    <span onClick={() => setContactSelected(true)}>Contact Me</span>
                    </li>
                </ul>
            </nav>
        </header>
    ); 
}

export default Nav; 