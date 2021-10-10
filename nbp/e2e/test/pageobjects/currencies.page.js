import Page from './page';
const HomePage = new Page();

class CurrenciesPage extends Page {

    get currencies_list () { return $('[data-testid="currencies-list"]')}
    get favorites_list () { return $('[data-testid="favorites-list"]')}
    get dolar_currency_btn () {return $('[data-testid="usd-add-btn"]')}
    get euro_currency_btn () {return $('[data-testid="eur-add-btn"]')}
    get pound_currency_btn () {return $('[data-testid="gbp-add-btn"]')}
    get dolar_list_item () { return $('[data-testid="usd-item"]')}
    get euro_list_item () { return $('[data-testid="eur-item"]')}
    get pound_list_item () { return $('[data-testid="gbp-item"]')}

    open (path) {
        logFuncName('cyan');
        return super.open(path);
    }

    async addThreeToFavorites () {
        logFuncName('cyan');
        await this.currencies_list.waitForDisplayed();
        await this.dolar_currency_btn.click();
        await this.euro_currency_btn.click();
        await this.pound_currency_btn.click();
    }

    async goToFavorites() {
        logFuncName('cyan');
        await HomePage.favorites_nav_link.click();
        await this.favorites_list.waitForDisplayed();
    }
}

export default new CurrenciesPage();
