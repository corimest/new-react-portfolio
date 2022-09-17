import React, { useState } from 'react';
import Pdf1 from "../../assets/projects/Resume_Part-1.png";
import Pdf2 from "../../assets/projects/Resume_Part-2.png";

function Resume() {
    const [pages] = useState([
        {
            name: "resume"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    return (
        <section>
            <h3>Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>APIs</li>
                </ul>
                <p>
                    <a href={Pdf1} download> Download Part 1 of my resume</a>
                    <a href={Pdf2} download> Download Part 2 of my resume</a>
                </p>
        </section>
    );
}

export default Resume;