import classes from '.././currencies/css/CurrencyItem.module.css';
import Button from "../Button";

const FavoriteCurrencyItem = (props) => {

    const lowerCaseCode = props.code.toLowerCase();

    const DATA_TEST_ID = {
        item: `${lowerCaseCode}-item`,
        button: `${lowerCaseCode}-remove-btn`,
        price: `${lowerCaseCode}-mid-price`,
        name: `${lowerCaseCode}-name`
    };

    const buttonAttr = {
        testId: DATA_TEST_ID.button,
        styles: 'btn danger',
        clickHandler: props.modal.bind(null, {
            type:'REMOVE',
            warning: `Czy jesteś pewny, że chcesz usunąć ten walor?`,
            buttonText: 'USUŃ',
            code: props.code
        }),
        text: 'USUŃ'
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
export default FavoriteCurrencyItem;
