import {useDispatch, useSelector} from "react-redux";
import CurrenciesList from "../components/currencies/CurrenciesList";
import FavoriteCurrencyItem from "../components/favorites/FavoriteCurrencyItem";
import Button from "../components/Button";
import ConfirmationModal from "../components/ConfirmationModal";

const Favorites = () => {

    const {favorites} = useSelector(state => state.favoritesReducer);
    const {modalIsVisible} = useSelector(state => state.modalStateReducer);
    const dispatch = useDispatch();

    const hideModalHandler = () => {
        dispatch({type: 'CLOSE'});
    }

    const showModalHandler = (action) => {
        dispatch({type: 'OPEN', payload: action});
    }

    const clickRemoveAllButtonHandler = () => {
        showModalHandler({
            type: 'REMOVE_ALL',
            warning: `Czy jesteś pewny, że chcesz usunąć wszystkie?`,
            buttonText: 'USUWAM'
        });
    }

    const removeAllButtonAttr = {
        testId: 'remove-all-btn',
        styles: 'btn danger',
        clickHandler: clickRemoveAllButtonHandler,
        text: 'USUŃ WSZYSTKIE'
    }

    return (
        <section>
            {modalIsVisible && <ConfirmationModal onClose={hideModalHandler}/>}
            {favorites.length > 0 ? <CurrenciesList currencies={favorites} modal={showModalHandler}
                                                    item={FavoriteCurrencyItem}/> : 'Nie masz jeszcze żadnych ulubionych walut.'}
            {favorites.length > 0 && <Button attributes={removeAllButtonAttr}/>}
        </section>
    )
};
export default Favorites;