import {Fragment} from "react";
import HeaderNavigation from "../components/navigation/HeaderNavigation";
import classes from './css/Layout.module.css'

const Layout = (props) => {
    return (
        <Fragment>
            <HeaderNavigation routes={props.routes} />
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    )
}
export default Layout