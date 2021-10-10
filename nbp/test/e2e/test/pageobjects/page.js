export default class Page {

    get currencies_nav_link () { return $('[data-testid="nav-currencies-link"]')}
    get favorites_nav_link () { return $('[data-testid="nav-favorites-link"]')}
    get favorites_nav_badge () {return $('[data-testid="nav-favorites-badge"]')}

    async setWindowSize(width, height) {
        await browser.setWindowSize(width, height);
    }

    async open ({path, width, height}) {
        await this.setWindowSize(width, height);
        return browser.url(`http://localhost:3000/${path}`);
    }
}
