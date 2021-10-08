import {useSelector} from "react-redux";
import CurrenciesList from "../components/currencies/CurrenciesList";
import React from "react";
import FavoriteCurrencyItem from "../components/favorites/FavoriteCurrencyItem";
import CurrenciesHeader from "../components/currencies/CurrenciesHeader";

const Favorites = () => {

    const {favorites} = useSelector(state => state);

    return (
        <section>
            {!!favorites.length && <CurrenciesHeader />}
            <CurrenciesList currencies={favorites} item={FavoriteCurrencyItem}/>
        </section>
    )
};
export default Favorites;