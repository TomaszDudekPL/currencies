import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from "./layout/Layout";
import Currencies from "./pages/Currencies";
import Favorites from "./pages/Favorites";
import NotFound from "./components/NotFound";

const ROUTES = {
    api: "http://api.nbp.pl/api/exchangerates/tables/a",
    first_route : "/",
    not_found_route : "*",
    currencies_route : "/currencies",
    favorites_route : "/favorites"
}

const App = () => {
    return (
        <Layout routes={ROUTES}>
            <Switch>
                <Route path={ROUTES.first_route} exact>
                    <Redirect to={ROUTES.currencies_route} />
                </Route>
                <Route path={ROUTES.currencies_route} exact>
                    <Currencies routes={ROUTES}/>
                </Route>
                <Route path={ROUTES.favorites_route} exact>
                    <Favorites routes={ROUTES}/>
                </Route>
                <Route path={ROUTES.not_found_route}>
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    )
}

export default App;