import classes from './css/CurrencyItem.module.css'
import {useState} from 'react';
import {useDispatch} from "react-redux";
import Button from "../Button";

const CurrencyItem = (props) => {

    const lowerCaseCode = props.code.toLowerCase();

    const DATA_TEST_ID = {
        item: `${lowerCaseCode}-item`,
        button: `${lowerCaseCode}-add-btn`,
        price: `${lowerCaseCode}-mid-price`,
        name: `${lowerCaseCode}-name`
    };

    const dispatch = useDispatch();

    const [added, setAddedState] = useState(false);

    const addToFavoritesHandler = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD', currency: props.currency});
        setAddedState(true);
        const timer = setTimeout(setAddedState, 500, false);
        return () => clearTimeout(timer);
    }

    const buttonAttr = {
        testId: DATA_TEST_ID.button,
        styles: added ? 'btn done' : 'btn',
        clickHandler: addToFavoritesHandler,
        text: !added ? 'Do ulubionych' : '✓ DODANO!'
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

            <Button attributes={buttonAttr} />
        </li>
    )
}
export default CurrencyItem;
