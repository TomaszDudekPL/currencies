import {useSelector} from "react-redux";
import CurrenciesList from "../components/currencies/CurrenciesList";
import React from "react";
import FavoriteCurrencyItem from "../components/favorites/FavoriteCurrencyItem";
import CurrenciesHeader from "../components/currencies/CurrenciesHeader";

const Favorites = () => {

    const {favorites} = useSelector(state => state);

    return (
        <section>
            {favorites.length > 0 && <CurrenciesHeader />}
            {favorites.length > 0 ? <CurrenciesList currencies={favorites} item={FavoriteCurrencyItem}/>: 'Nie masz jeszcze żadnych ulubionych.'}
        </section>
    )
};
export default Favorites;