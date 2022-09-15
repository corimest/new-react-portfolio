import React from 'react'; 

function Nav() {
    // const categories = useState([
    //     {
    //         name: "project_1", 
    //         description: "The first project", 
    //     }, 
    //     {
    //         name: "project_2", 
    //         description: "The second project", 
    //     }, 
    //     {
    //         name: "project_3", 
    //         description: "The third project", 
    //     }, 
    //     {
    //         name: "project_4", 
    //         description: "The fourth project", 
    //     }, 
    //     {
    //         name: "project_5", 
    //         description: "The five project", 
    //     }, 
    //     {
    //         name: "project_6", 
    //         description: "The sixth project", 
    //     }
    // ])

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    // }

    return(
        <header>
            <nav>
                <ul className="flex-row">
                    <li>
                        <span>Corinne Mestemacher</span>
                    </li>
                    <li>
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <span>Contact Me</span>
                    </li>
                    {/* {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                        <span onClick={() => categorySelected(category.name)} >
                            {category.name}
                        </span>
                        </li> */}
                    {/* ))} */}
                </ul>
            </nav>
        </header>
    ); 
}

export default Nav; 