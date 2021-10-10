import Page from './page';

class FavoritesPage extends Page {

    get currencies_list () { return $('[data-testid="currencies-list"]')}
    get favorites_list () { return $('[data-testid="favorites-list"]')}
    get dolar_list_item () { return $('[data-testid="usd-item"]')}
    get euro_list_item () { return $('[data-testid="eur-item"]')}
    get pound_list_item () { return $('[data-testid="gbp-item"]')}
    get dolar_remove_btn () {return $('[data-testid="usd-remove-btn"]')}
    get euro_remove_btn () {return $('[data-testid="eur-remove-btn"]')}
    get pound_remove_btn () {return $('[data-testid="gbp-remove-btn"]')}
    get remove_all_btn () {return $('[data-testid="remove-all-btn"]')}

}

export default new FavoritesPage();
