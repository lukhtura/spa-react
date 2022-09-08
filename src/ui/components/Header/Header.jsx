//Core
import { useContext } from "react";
import { routers } from "../../../core/config";
import { ThemeContext, theme } from "../../_helpers/context/theme";

//Component
import Link from "../Link/Link";
//Styles
import './Header.css'

function Header() {
    const [value, setValue] = useContext(ThemeContext);
    const changeValue = () => {
        setValue(theme.color.first)
    }
    return (
        <header className='header'>
            <h1 className="logo" onClick={changeValue}>Nikolay Lukhtura</h1>
            <ul className="header__list">
                <li><Link to={routers.main} type="NavLink" color={value}>Main</Link></li>
                <li><Link to={routers.todo} type="NavLink" color={value}>TODO list</Link></li>
                {/* <li><Link to="#" color={value}>Верстка макета</Link></li> */}
                <li><Link to={routers.about} type="NavLink" color={value}>Contact me</Link></li>
            </ul>
        </header>
    );
};

export default Header;