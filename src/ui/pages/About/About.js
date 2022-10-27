//Styles
import './About.css'

function About() {
    return (
        <div className="about-container">
            <div className="about-container-image">
                <img src={require('./../../_helpers/assets/images/my-foto.jpeg')} className='my-foto' alt='my-foto'/>
            </div>
            <div className="about-container-info">
                <h1 className="about-header">Hi there!</h1>
                <p className='about-text'> My name is Nikolay. I'm from Ukraine, but for the last 5 years I'm living in Poland. I'm a cab driver and also a DJ. I have been studying web-development for the last year. So here the list of my Front-Ender skills:</p>
                <ul className='skills-list'>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>Redux</li>
                    <li>Git</li>
                </ul>
            </div>
        </div>
    )
};

export default About;