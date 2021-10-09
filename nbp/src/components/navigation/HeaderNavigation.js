import {NavLink} from 'react-router-dom';
import classes from './css/HeaderNavigation.module.css';

const HeaderNavigation = (props) => {

    const {currencies_route, favorites_route} = props.routes;

    const DATA_TEST_ID = {
        currencies: 'nav-currencies-link',
        favorites: 'nav-favorites-link'
    };

    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink data-testid={DATA_TEST_ID.currencies} activeClassName={classes.active} exact
                                 to={`${currencies_route}`}>WALUTY</NavLink>
                    </li>
                    <li>
                        <NavLink data-testid={DATA_TEST_ID.favorites} activeClassName={classes.active} to={favorites_route}>ULUBIONE</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNavigation