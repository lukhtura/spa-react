import { useContext } from "react";
import { routers } from "../../core/config";
import { ThemeContext, theme } from "../_helpers/context/theme";

import Link from "./Link";

function Header() {
    const [value, setValue] = useContext(ThemeContext);
    const changeValue = () => {
        setValue(theme.color.first)
    }
    return (
        <header className='header'>
            <h1 className="logo" onClick={changeValue}>Ф.И.О.</h1>
            <ul className="header__list">
                <li><Link to={routers.main} type="NavLink" color={value}>Главная</Link></li>
                <li><Link to="#" color={value}>TODO лист</Link></li>
                <li><Link to="#" color={value}>Верстка макета</Link></li>
                <li><Link to={routers.about} type="NavLink" color={value}>Контакты</Link></li>
            </ul>
        </header>
    );
};

export default Header;