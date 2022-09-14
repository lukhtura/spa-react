//Core
import { NavLink } from 'react-router-dom';
//Styles
import './Link.css'
function Link(props) {
    const { children, to, color, type } = props;
    return (
        type === 'a'
            ? <a className="link"  href={to} style={{ color }}>{children}</a>
            : <NavLink className="link" to={to} style={{ color }}>{children}</NavLink>
    );
};

Link.defaultProps = {
    type: 'a',
}

export default Link;