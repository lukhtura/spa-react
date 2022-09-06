import { useContext } from "react";

import Link from "./Link";
import { ThemeContext, theme } from "../_helpers/context/theme";

function Footer() {
    const [value, setValue] = useContext(ThemeContext);
    const changeValue = () => {
        setValue(theme.color.second)
    }
    return (
        <footer className='footer'>
            <h1 className="logo" onClick={changeValue}>Ф.И.О.</h1>
            <ul>
                <li>Phone number: <Link to="tel:+48795314433" color={value}>+48 795 314 433</Link></li>
                <li>Email:<Link to="mailto:test@test.gmail.com" color={value}> test@test.gmail.com</Link></li>
                <li><Link to="github.com" color={value}>GIThub</Link></li>
            </ul>
        </footer>
    );
};

export default Footer;