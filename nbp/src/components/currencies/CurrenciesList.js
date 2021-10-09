import {Fragment} from "react";
import classes from './css/CurrenciesList.module.css';

const CurrenciesList = (props) => {

    const Item = props.item;

    return (
        <Fragment>
            <ul className={classes.list}>
                {props.currencies.map(obj => (
                        <Item
                            currency={obj}
                            modal={props.modal}
                            key={obj.code}
                            name={obj.currency}
                            code={obj.code}
                            mid={obj.mid}
                        />
                ))}
            </ul>
        </Fragment>
    )
}
export default CurrenciesList;