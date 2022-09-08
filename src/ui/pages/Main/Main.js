//Styles
import './Main.css'

function Main() {
    return (
        <div className="main-container">
            <div className="main-container-image">
                <img src={require('./../../_helpers/assets/images/my-foto.jpeg')} className='my-foto' alt='my-foto'/>
            </div>
            <div className="main-container-info">
                <h1 className="main-header">About me</h1>
                <p className='main-text'>Hi there!</p>
                <p className='main-text'> My name is Nikolay. I'm from Ukraine, but for the last 5 years I'm living in Poland. I'm a cab driver and also a DJ. I have been studying web-development for the last year. So here the list of my Front-Ender skills:</p>
                <ul className='skills-list'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>WebPack</li>
                    <li>ReactJS</li>
                </ul>
            </div>
        </div>
    )
};

export default Main;