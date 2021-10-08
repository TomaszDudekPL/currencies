import classes from './css/CurrencyItem.module.css'
import {useState} from 'react';
import {useDispatch} from "react-redux";

const CurrencyItem = (props) => {

    const lowerCaseCode = props.code.toLowerCase();

    const DATA_TEST_ID = {
        item: `${lowerCaseCode}-item`,
        button: `${lowerCaseCode}-btn`,
        price: `${lowerCaseCode}-mid-price`,
        name: `${lowerCaseCode}-name`
    };

    const dispatch = useDispatch();

    const [added, setAddedState] = useState(false);

    const addToFavoritesHandler = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD', currency: props.currency});
        setAddedState(true);
        const timer = setTimeout(setAddedState, 1000, false);
        return () => clearTimeout(timer);
    }

    return (
        <li
            className={classes.item}
            data-testid={DATA_TEST_ID.item}>
            <span>{props.code}</span>

            <span
                data-testid={DATA_TEST_ID.price}
            >{props.mid}</span>

            <span
                data-testid={DATA_TEST_ID.name}
            >{props.name}</span>

            <button
                data-testid={DATA_TEST_ID.button}
                className={added ? 'btn done' : 'btn'}
                onClick={addToFavoritesHandler}
            >{!added ? 'Do ulubionych' : '✓ DODANO!'}
            </button>
        </li>
    )
}
export default CurrencyItem;
