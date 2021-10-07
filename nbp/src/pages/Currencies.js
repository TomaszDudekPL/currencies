import useFetch from "../hooks/use-fetch";
import {Fragment} from "react";
import CurrenciesHeader from "../components/currencies/CurrenciesHeader";

const Currencies = (props) => {

    const content = useFetch(props.routes.api);

    return (
        <Fragment>
            <CurrenciesHeader />
            <section>{content}</section>
        </Fragment>
    )
}
export default Currencies;