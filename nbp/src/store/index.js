import {createStore} from 'redux'

const initState = {
    favorites: []
}

const favoritesReducer = (state = initState, action) => {

    if(action.type === 'ADD') {

        const existingCurrencyIndex = state.favorites.findIndex(currency => currency.code === action.currency.code);

        const existingCurrency = state.favorites[existingCurrencyIndex];

        let updatedCurrencies = [];

        if(existingCurrency){
            const updatedCurrency = {
                ...existingCurrency
            };
            updatedCurrencies = [...state.favorites];
            updatedCurrencies[existingCurrencyIndex] = updatedCurrency;
        } else {
            updatedCurrencies = state.favorites.concat(action.currency);
        }
        return {
            favorites: updatedCurrencies
        }

    }

    if(action.type === 'REMOVE') {
        const updatedItems = state.favorites.filter(item => item.code !== action.code);
        return {
            favorites: updatedItems
        }
    }

    if(action.type === 'REMOVE_ALL') {
        return {
            favorites: []
        }
    }

    return state;

}

const store = createStore(favoritesReducer);

export default store;