import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage from '../pages/HomePage';
import UserOnboardPage from "../pages/UserOnboardPage";
import ContactPage from "../pages/ContactPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import PolicyPage from "../pages/PolicyPage";
import AboutPage from "../pages/AboutPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/onboard" component={UserOnboardPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/purchase" component={PurchasePage}/>
                    <Route exact path="/refund" component={RefundPage}/>
                    <Route exact path="/policy" component={PolicyPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                </Switch>
            </Fragment>
        );
    }
}
export default AppRoute;