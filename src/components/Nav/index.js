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
                    <li>
                        <span>Corinne Mestemacher</span>
                    </li>
                    <li>
                        <a data-testid='about' href="#about" onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <a data-testid='portfolio' href="#portfolio" onClick={() => setContactSelected(false)}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                    <span onClick={() => setContactSelected(true)}>Contact Me</span>
                    </li>
                </ul>
            </nav>
        </header>
    ); 
}

export default Nav; 