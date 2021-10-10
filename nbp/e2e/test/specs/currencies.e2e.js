import Page from "../pageobjects/page";

const HomePage = new Page();
import CurrenciesPage from '../pageobjects/currencies.page';
import FavoritesPage from '../pageobjects/favorites.page';
import Modal from '../pageobjects/modal';
import details from '../data/test-data';

describe('Currencies', () => {

    before(() => {
        HomePage.open(
            {
                path: 'currencies',
                width: 1400,
                height: 1200
            });
    });

    it('should get list of currencies', async () => {
        expect(CurrenciesPage.currencies_list).toBeDisplayed();
    });

    it('should add three currencies to favorites', async () => {

        await CurrenciesPage.addThreeToFavorites("dolar", "euro", "pound");
        await CurrenciesPage.goToFavorites();

        expect(FavoritesPage.dolar_list_item).toBeDisplayed();
        expect(FavoritesPage.euro_list_item).toBeDisplayed();
        expect(FavoritesPage.pound_list_item).toBeDisplayed();

    });

    it('should remove currency from favorites list', async () => {

        await FavoritesPage.dolar_remove_btn.click();
        expect(Modal.modal_body).toBeDisplayed();
        await Modal.modal_confirm_btn.click();

        expect(FavoritesPage.dolar_list_item).not.toBeDisplayed();
        expect(FavoritesPage.euro_list_item).toBeDisplayed();
        expect(FavoritesPage.pound_list_item).toBeDisplayed();
        expect(Modal.modal_body).not.toBeDisplayed();

    });
    it('should remove all currencies from favorites list', async () => {
        await FavoritesPage.remove_all_btn.click();
        expect(Modal.modal_body).toBeDisplayed();
        await Modal.modal_confirm_btn.click();

        expect(FavoritesPage.dolar_list_item).not.toBeDisplayed();
        expect(FavoritesPage.euro_list_item).not.toBeDisplayed();
        expect(FavoritesPage.pound_list_item).not.toBeDisplayed();
        expect(FavoritesPage.favorites_list).toHaveTextContaining(details.no_favorites_text);
        expect(Modal.modal_body).not.toBeDisplayed();

    });
});


