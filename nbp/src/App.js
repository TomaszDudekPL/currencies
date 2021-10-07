import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from "./layout/Layout";
import Currencies from "./pages/Currencies";

const ROUTES = {
    base: "http://api.nbp.pl/api/",
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
            </Switch>
        </Layout>
    )
}

export default App;