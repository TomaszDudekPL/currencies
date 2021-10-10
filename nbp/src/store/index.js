import {createStore, combineReducers} from 'redux';
import favoritesReducer from "./favoritesReducer";
import modalStateReducer from "./modalStateReducer";

const rootReducer = combineReducers({
    favoritesReducer,
    modalStateReducer
});

const store = createStore(rootReducer);

export default store;