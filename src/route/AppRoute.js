import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage from '../pages/HomePage';
import UserOnboardPage from "../pages/UserOnboardPage";
import ContactPage from "../pages/ContactPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import PolicyPage from "../pages/PolicyPage";
import AboutPage from "../pages/AboutPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import ProductListByCategory from "../pages/ProductListByCategory";
import ProductListBySubCategory from "../pages/ProductListBySubCategory";

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
                    <Route exact path="/productDetails/:code" component={ProductDetailsPage}/>
                    <Route exact path="/notification" component={NotificationPage}/>
                    <Route exact path="/favourite" component={FavouritePage}/>
                    <Route exact path="/cart" component={CartPage}/>
                    <Route exact path="/order" component={OrderPage}/>
                    <Route exact path="/ProductListByCategory/:Category" component={ProductListByCategory}/>
                    <Route exact path="/ProductListBySubCategory/:Category/:SubCategory" component={ProductListBySubCategory}/>
                </Switch>
            </Fragment>
        );
    }
}
export default AppRoute;