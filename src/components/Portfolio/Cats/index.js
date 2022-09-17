import React from 'react'; 
import photo from '../../../assets/projects/cats_title.png';

function Cats() {

    return (
        <section>
            <h1>Classics with Cats</h1>
            <p>A web application that provides a safe chat room and search engine for young girls. This application was made for girls ages 9-13 who are searching for new books to read and a way to connect with other girls who share a passion for literature.</p>
        <div>
            <h2>Repo Link</h2>
                <div className='link'>
                    <a href='https://github.com/corimest/read-the-classics' className='link'>Click Here</a>
                </div>
            <h2>Deployed Link</h2>
                <div className='link'>
                    <a href='https://read-the-calssics.herokuapp.com/'>Click Here</a>
                </div>
        </div>
        <img className='img' src={photo} style={{ width: '50%' }} alt='classics with cats picture one'/>
        </section>
    )
}

export default Cats; 