import classes from './css/CurrencyItem.module.css'
import {useState} from 'react';

const CurrencyItem = (props) => {

    const [added, setAddedState] = useState(false);

    const addToFavoritesHandler = (e) => {
        e.preventDefault();
        console.log(props.currency);
        setAddedState(true);
        const timer = setTimeout(setAddedState, 1000, false);
        return () => clearTimeout(timer);
    }

    return (
        <li className={classes.item}>
            <span>{props.code}</span>
            <span>{props.mid}</span>
            <span>{props.name}</span>
            <button
                className={added? 'btn done': 'btn'}
                onClick={addToFavoritesHandler}
            >{!added? 'Do ulubionych': '✓ DODANO!'}</button>
        </li>
    )
}
export default CurrencyItem;