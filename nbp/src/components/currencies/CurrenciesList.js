import {Fragment} from "react";
import classes from './css/CurrenciesList.module.css';
import CurrencyItem from './CurrencyItem'

const CurrenciesList = (props) => {
    return (
        <Fragment>
            <ul className={classes.list}>
                {props.currencies.map(obj => (
                        <CurrencyItem
                            currency={obj}
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