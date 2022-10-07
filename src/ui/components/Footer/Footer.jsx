//Core
import { useContext } from "react";
//Components
import Link from "../Link/Link";
import { ThemeContext, theme } from "../../_helpers/context/theme";
//Styles
import './Footer.css';

function Footer() {
    const [value, setValue] = useContext(ThemeContext);
    const changeValue = () => {
        setValue(theme.color.second)
    };
    return (
        <footer className='footer'>
            <h1 className="logo" onClick={changeValue}>Nikolay Lukhtura</h1>
            <ul>
                <li>Phone number: <Link to="tel:+48795314433" color={value}>+48 795 314 433</Link></li>
                <li>Email:<Link to="mailto:ikolyancheg@gmail.com" color={value}> ikolyancheg@gmail.com</Link></li>
                <li><Link to="https://github.com/lukhtura" color={value}>GIThub</Link></li>
            </ul>
        </footer>
    );
};

export default Footer;