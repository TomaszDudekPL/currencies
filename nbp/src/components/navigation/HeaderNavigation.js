import {NavLink} from 'react-router-dom';
import classes from './css/HeaderNavigation.module.css';
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";

const HeaderNavigation = (props) => {

    const {currencies_route, favorites_route} = props.routes;
    const {favorites} = useSelector(state => state.favoritesReducer);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const DATA_TEST_ID = {
        currencies: 'nav-currencies-link',
        favorites: 'nav-favorites-link'
    };

    const numberOfBasketButtonItems = favorites.length;

    const badgeClasses = `${classes.badge} ${btnIsHighlighted? classes.bump: ''}`;

    useEffect(() => {
        if(favorites.length === 0) return;

        setBtnIsHighlighted(true);

        const timer = setTimeout(setBtnIsHighlighted, 600, false);

        return () => clearTimeout(timer);

    }, [favorites]);

    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink data-testid={DATA_TEST_ID.currencies} activeClassName={classes.active} exact
                                 to={`${currencies_route}`}>WALUTY</NavLink>
                    </li>
                    <li>
                        <NavLink data-testid={DATA_TEST_ID.favorites} activeClassName={classes.active}
                                 to={favorites_route}>
                            ULUBIONE
                        </NavLink>
                        <span className={badgeClasses}>
                                {numberOfBasketButtonItems}
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNavigation