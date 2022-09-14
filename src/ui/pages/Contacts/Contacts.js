//Core
import { useContext } from "react";

//Component
import Link from "../../components/Link/Link";
import { ThemeContext, theme } from "../../_helpers/context/theme";

//Styles
import './Contacts.css'

function Contacts() {
    const [value, setValue] = useContext(ThemeContext);
    setValue(theme.color.first)
    return (
        <div className="contacts-container">
            <h1 className="contacts-header">Contacts</h1>
            <div className="contacts-list">
                <ul>
                <li>Phone number: <Link to="tel:+48795314433" color={value}>+48 795 314 433</Link></li>
                <li>Email:<Link to="mailto:ikolyancheg@gmail.com" color={value}> ikolyancheg@gmail.com</Link></li>
                <li>Telegram<Link to="https://t.me/nniikkoollaayy1" color={value}> nniikkoollaayy1</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Contacts;