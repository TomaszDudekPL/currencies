import {NavLink} from 'react-router-dom';
import classes from './css/HeaderNavigation.module.css';

const HeaderNavigation = (props) => {

    const {currencies_route, favorites_route} = props.routes;

    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} exact
                                 to={`${currencies_route}`}>WALUTY</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to={favorites_route}>ULUBIONE</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNavigation