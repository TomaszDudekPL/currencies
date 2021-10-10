import {NavLink} from 'react-router-dom';
import classes from './css/HeaderNavigation.module.css';
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";

const HeaderNavigation = (props) => {

    const {currencies_route, favorites_route} = props.routes;
    const {favorites} = useSelector(state => state.favoritesReducer);
    const [badgeIsBumped, setBadgeIsBumped] = useState(false);

    const DATA_TEST_ID = {
        currencies: 'nav-currencies-link',
        favorites: 'nav-favorites-link',
        badge: 'nav-favorites-badge'
    };

    const numberOfFavorites = favorites.length;

    const badgeClasses = `${classes.badge} ${badgeIsBumped? classes.bump: ''}`;

    useEffect(() => {
        if(numberOfFavorites === 0) return;

        setBadgeIsBumped(true);

        const timer = setTimeout(setBadgeIsBumped, 600, false);

        return () => clearTimeout(timer);

    }, [numberOfFavorites]);

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
                        <div className={badgeClasses}>
                        <span data-testid={DATA_TEST_ID.badge} >
                                {numberOfFavorites}
                        </span>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNavigation