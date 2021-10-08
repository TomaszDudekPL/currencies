import useFetch from "../hooks/use-fetch";
import {Fragment} from "react";
import CurrenciesHeader from "../components/currencies/CurrenciesHeader";
import Error from "../components/Error";
import NoCurrencies from "../components/NoCurrencies";
import Loading from "../components/Loading";
import CurrenciesList from "../components/currencies/CurrenciesList";
import CurrencyItem from "../components/currencies/CurrencyItem";

const Currencies = (props) => {

    const { error, isLoading, currencies } = useFetch(props.routes.api);

    return (
        <Fragment>
            {!!currencies.length && <CurrenciesHeader />}
            {!currencies.length && <NoCurrencies />}
            {error && <Error error={error} />}
            {isLoading && <Loading />}
            <section>
                <CurrenciesList currencies={currencies} item={CurrencyItem}/>
            </section>
        </Fragment>
    )
}
export default Currencies;