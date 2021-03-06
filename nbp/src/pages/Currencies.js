import useFetch from "../hooks/use-fetch";
import {Fragment} from "react";
import Error from "../components/Error";
import NoCurrencies from "../components/NoCurrencies";
import Loading from "../components/Loading";
import CurrenciesList from "../components/currencies/CurrenciesList";
import CurrencyItem from "../components/currencies/CurrencyItem";

const Currencies = (props) => {

    const {error, isLoading, currencies} = useFetch(props.routes.api);

    return (
        <Fragment>
            <section data-testid="currencies-list">
            {!isLoading && currencies.length === 0 && <NoCurrencies/>}
            {error && <Error error={error}/>}
            {isLoading && <Loading/>}
                {!isLoading && currencies.length > 0 &&
                <CurrenciesList currencies={currencies} item={CurrencyItem}/>}
            </section>
        </Fragment>
    )
}
export default Currencies;